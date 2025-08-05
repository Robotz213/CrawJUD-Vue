<script setup lang="ts">
import { LogsBotSocket } from "@/main";
import { useStoreLogsBot } from "@/stores/bot/logs";
import { storeToRefs } from "pinia";

import ChartView from "./components/ChartView.vue";
import LogsCardView from "./components/LogsCardView.vue";

const storeLogs = useStoreLogsBot();

const { current_pid, contentRef } = storeToRefs(storeLogs);

function stopBotExecution() {
  LogsBotSocket.emit("stop_signal", { data: { pid: current_pid.value } });
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
    </div>
  </div>
</template>
