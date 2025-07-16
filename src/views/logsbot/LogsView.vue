<script setup lang="ts">
import { LogsBotSocket } from "@/main";
import { useStoreLogsBot } from "@/stores/bot/logs";
import { storeToRefs } from "pinia";
import { onBeforeMount, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ChartView from "./components/ChartView.vue";
import LogsCardView from "./components/LogsCardView.vue";

const storeLogs = useStoreLogsBot();

const { listLogs, totalSuccess, totalErrors, totalLogs, remainingLogs, current_pid, contentRef } =
  storeToRefs(storeLogs);
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

  storeLogs.$reset();
});

function stopBotExecution() {
  LogsBotSocket.emit("stop_signal", { data: { pid: current_pid.value } });
  console.log("Signal to stop bot execution sent.");
}
</script>

<template>
  <div ref="contentRef" class="container-fluid" id="executions">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-sm-6 col-md-6 me-auto">
            <h4>Estatisticas</h4>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="row justify-content-end">
              <div class="col-md-6">
                <a
                  class="btn btn-outline-success disabled"
                  aria-disabled="true"
                  id="download-button"
                  href="#"
                  >Baixar Documento</a
                >
              </div>
              <div class="col-md-6">
                <button
                  @click="stopBotExecution"
                  type="button"
                  class="btn btn-warning"
                  id="stop_execut"
                >
                  Encerrar Execução
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body bg-warning bg-opacity-75">
        <div class="row">
          <div class="col-xl-6 col-md-6">
            <LogsCardView />
          </div>
          <div class="col-xl-6 col-md-6">
            <ChartView />
          </div>
        </div>
      </div>
      <div class="card-footer bg-secondary"></div>
    </div>
  </div>
</template>
