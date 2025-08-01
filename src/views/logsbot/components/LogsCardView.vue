<script setup lang="ts">
import { LogsBotSocket } from "@/main";
import { useStoreLogsBot } from "@/stores/bot/logs";
import { storeToRefs } from "pinia";
import { onBeforeMount, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import MaterialSymbolsPieChartOutline from "~icons/material-symbols/pie-chart-outline?width=24px&height=24px";
import setupLogsExec from "./setupLogsExec";
const { CardContent, SizeCard, MinSizeCard } = setupLogsExec();

const logsStore = useStoreLogsBot();
const { listLogs, totalLogs, status, current_pid, totalSuccess, totalErrors, remainingLogs } =
  storeToRefs(logsStore);

const route = useRoute();
const router = useRouter();

function get_logs(logsData: LogsBotRecord, loadCache: boolean = false) {
  console.log(logsData);

  if (!loadCache) {
    listLogs.value.push(logsData);
  } else if (loadCache) {
    listLogs.value = logsData.messages as unknown as LogsBotRecord[];
  }

  totalSuccess.value = logsData.success;
  totalErrors.value = logsData.errors;
  totalLogs.value = logsData.total;
  remainingLogs.value = logsData.remaining;
  status.value = logsData.status;
}

LogsBotSocket.on("log_execution", get_logs);

onBeforeMount(() => {
  if (!route.params.pid) {
    router.push({ name: "bots" });
  }
  current_pid.value = route.params.pid as string;
  LogsBotSocket.connect();
  LogsBotSocket.emit("join_room", { data: { room: current_pid.value } });
  LogsBotSocket.emit("load_cache", { data: { pid: route.params.pid } }, get_logs);
});

onUnmounted(() => {
  LogsBotSocket.off("load_cache", get_logs);
  LogsBotSocket.off("log_execution", get_logs);
  LogsBotSocket.disconnect();

  logsStore.$reset();
});

const itemLog = ref();

watch(itemLog, (newvalue) => {
  console.log(newvalue);
});
</script>
<template>
  <div class="card fixed-height-card border-0">
    <div class="card-header">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-5">
          <span class="fw-semibold">
            <MaterialSymbolsPieChartOutline class="me-2" />
          </span>
          <span class="fw-semibold"
            >Logs Execução {{ current_pid.split("-")[0].toUpperCase() }}</span
          >
        </div>
      </div>
    </div>
    <div class="card-body bg-black overflow-auto" style="min-height: 400px">
      <CardContent
        :SizeCard="SizeCard"
        :MinSizeCard="MinSizeCard"
        class="overflow-y-auto align-items-start justify-content-start"
      >
        <TransitionGroup tag="ul" name="fade" ref="itemLog">
          <li v-for="(item, index) in listLogs" :key="index" :class="item.type.toLowerCase()">
            {{ item.message }}
          </li>
        </TransitionGroup>
      </CardContent>
    </div>
    <div class="card-footer small text-muted fw-semibold">
      <span id="status">Status: {{ status }} | Total: {{ totalLogs }}</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.error {
  color: #892323;
  font-weight: bold;
}

.info {
  color: #f1cf0b;
  font-weight: bold;
}

.warning {
  color: #ff8400;
  font-weight: bold;
}

.success {
  color: #02b102;
  font-weight: bold;
}

.log {
  color: #d1d0d0;
  font-weight: bold;
}
</style>
