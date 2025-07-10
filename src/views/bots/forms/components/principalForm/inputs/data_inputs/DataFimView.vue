<script setup lang="ts">
import setupData from "./setupData";

const { getDate } = setupData();
</script>

<template>
  <div class="col-md-5 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <label class="form-label" for="data_fim">Data Fim</label>
    <input
      class="form-control"
      data-placeholder="Data Fim"
      id="data_fim"
      name="data_fim"
      type="date"
      :value="getDate()"
    />
  </div>
</template>
