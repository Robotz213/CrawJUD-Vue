<script setup lang="ts">
import {
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

Chart.register([CategoryScale, LineController, LineElement, LinearScale, PointElement]);

const route = useRoute();
const current_pid = ref("");

onBeforeMount(() => {
  current_pid.value = route.params.pid as string;
});
</script>

<template>
  <div class="container-fluid" id="executions">
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
                <button type="button" class="btn btn-warning" id="stop_execut">
                  Encerrar Execução
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body bg-warning bg-opacity-75">
        <div class="row">
          <div class="col-xl-6 col-md-6"></div>
          <div class="col-xl-6 col-md-6"></div>
        </div>
      </div>
      <div class="card-footer bg-secondary"></div>
    </div>
  </div>
</template>
