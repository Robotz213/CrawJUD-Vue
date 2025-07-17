<script setup lang="ts">
import { LogsBotSocket } from "@/main";
import { useStoreLogsBot } from "@/stores/bot/logs";
import { storeToRefs } from "pinia";
import { onBeforeMount, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import MaterialSymbolsPieChartOutline from "~icons/material-symbols/pie-chart-outline?width=24px&height=24px";
import setupLogsExec from "./setupLogsExec";
const { CardContent, SizeCard, MinSizeCard } = setupLogsExec();

const logsStore = useStoreLogsBot();
const { listLogs, totalLogs, status, current_pid, totalSuccess, totalErrors, remainingLogs } =
  storeToRefs(logsStore);

const route = useRoute();
const router = useRouter();

function get_logs(logsData: LogsBotRecord) {
  listLogs.value.push(logsData);
  totalSuccess.value = logsData.success;
  totalErrors.value = logsData.errors;
  totalLogs.value = logsData.total;
  remainingLogs.value = logsData.remaining;
}

LogsBotSocket.on("load_cache", get_logs);
LogsBotSocket.on("log_execution", get_logs);

onBeforeMount(() => {
  if (!route.params.pid) {
    router.push({ name: "bots" });
  }
  current_pid.value = route.params.pid as string;
  LogsBotSocket.connect();
  LogsBotSocket.emit("join_room", { data: { room: current_pid.value } });
});

onUnmounted(() => {
  LogsBotSocket.off("load_cache", get_logs);
  LogsBotSocket.off("log_execution", get_logs);
  LogsBotSocket.disconnect();

  logsStore.$reset();
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
          <span class="fw-semibold">Logs Execução {{ current_pid }}</span>
        </div>
      </div>
    </div>
    <div class="card-body bg-black overflow-auto">
      <CardContent
        :SizeCard="SizeCard"
        :MinSizeCard="MinSizeCard"
        class="overflow-y-auto align-items-start"
      >
        <TransitionGroup tag="ul" name="fade">
          <li v-for="(item, index) in listLogs" :key="index">
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
