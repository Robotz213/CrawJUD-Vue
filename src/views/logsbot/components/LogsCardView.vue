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
  console.log(logsData);
  listLogs.value.push(logsData);
  totalSuccess.value = logsData.success;
  totalErrors.value = logsData.errors;
  totalLogs.value = logsData.total;
  remainingLogs.value = logsData.remaining;
  status.value = logsData.status;
}

LogsBotSocket.emit("load_cache", { data: { pid: route.params.pid } }, get_logs);
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

/**
 * Retorna a classe CSS correspondente ao tipo de log.
 *
 * @param {LogsBotRecord} item - Objeto de log contendo o tipo.
 * @returns {string} Classe CSS correspondente ao tipo de log.
 */
function getClass(item: LogsBotRecord): string {
  const classes_css: Record<"success" | "error" | "info" | "warning" | "log", string> = {
    success: "bg-success",
    error: "bg-danger",
    info: "bg-primary",
    warning: "bg-warning",
    log: "bg-white",
  };

  return classes_css[item.type as "success" | "error" | "info" | "warning" | "log"] ?? "";
}
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
        <TransitionGroup tag="ul" name="fade">
          <li v-for="(item, index) in listLogs" :key="index" :class="getClass(item)">
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
