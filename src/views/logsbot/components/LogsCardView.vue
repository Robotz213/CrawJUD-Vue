<script setup lang="ts">
import { useStoreLogsBot } from "@/stores/bot/logs";
import { storeToRefs } from "pinia";
import MaterialSymbolsPieChartOutline from "~icons/material-symbols/pie-chart-outline?width=24px&height=24px";
import setupLogsExec from "./setupLogsExec";

const { CardContent, SizeCard, MinSizeCard } = setupLogsExec();
const { listLogs, totalLogs, status, current_pid } = storeToRefs(useStoreLogsBot());
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
      <CardContent :SizeCard="SizeCard" :MinSizeCard="MinSizeCard" class="overflow-y-auto">
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
