<script setup lang="ts">
import { ref } from "vue";

const selected = ref(null);

const stateOptions = ref([
  { value: null, text: "Selecione um estado", disabled: true },
  { value: "AM", text: "Amazonas" },
]);
</script>

<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <label class="form-label" for="state">Selecione o Estado</label>
    <BFormSelect v-model="selected" :options="stateOptions" />
  </div>
</template>
