<script setup lang="ts">
import formSetup from "@/setup/formbot/scripts/formSetup";

const { form } = formSetup();
</script>
<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <label class="form-label">Selecione o Cliente</label>
    <select
      v-model="form.client"
      class="form-control select2-hidden-accessible"
      data-placeholder="Selecione o Cliente"
      id="client"
      name="client"
      data-select2-id="client"
      tabindex="-1"
      aria-hidden="true"
    >
      <option :value="null" data-select2-id="4">Selecione</option>
      <option value="AM">AME - Amazonas Energia</option>
    </select>
  </div>
</template>
