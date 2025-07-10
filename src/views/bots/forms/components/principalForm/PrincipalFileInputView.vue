<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { storeToRefs } from "pinia";

const { form } = storeToRefs(storeBot());
</script>

<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <BFormFile
      v-model="form.xlsx"
      label="Arquivo de execução"
      label-class="form-label"
      class="form-control"
      data-placeholder="Arquivo de execução"
      id="xlsx"
      name="xlsx"
      type="file"
      :required="false"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    />
  </div>
</template>
