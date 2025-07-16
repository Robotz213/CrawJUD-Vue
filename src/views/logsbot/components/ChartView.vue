<script setup lang="ts">
import { useStoreLogsBot } from "@/stores/bot/logs";
import { Chart } from "chart.js/auto";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import MaterialSymbolsPieChartOutline from "~icons/material-symbols/pie-chart-outline?width=24px&height=24px";
import setupLogsExec from "./setupLogsExec";
const { remainingLogs, totalSuccess, totalErrors } = storeToRefs(useStoreLogsBot());
const { CardContent, SizeCard, MinSizeCard } = setupLogsExec();

const chart = ref<HTMLCanvasElement>();
onMounted(() => {
  if (chart.value) {
    const ctx = chart.value.getContext("2d");
    if (ctx) {
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["RESTANTES", "SUCESSOS", "ERROS"],
          datasets: [
            {
              data: [remainingLogs.value, totalSuccess.value, totalErrors.value],
              backgroundColor: ["#0096C7", "#42cf06", "#FF0000"],
            },
          ],
        },
      });
    }
  }
});
</script>

<template>
  <div class="card mb-4 fixed-height-card">
    <div class="card-header">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-5">
          <span class="fw-semibold">
            <MaterialSymbolsPieChartOutline class="me-2" />
          </span>
          <span class="fw-semibold"> Gráfico da execução </span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <CardContent :SizeCard="SizeCard" :MinSizeCard="MinSizeCard">
        <canvas ref="chart" id="LogsBotChart" class=""></canvas>
      </CardContent>
    </div>
    <div class="card-footer small text-muted fw-semibold">
      <span id="remaining">Restantes: {{ remainingLogs }}</span> |
      <span id="success">Sucessos: {{ totalSuccess }}</span> |
      <span id="errors">Erros: {{ totalErrors }}</span>
    </div>
  </div>
</template>
