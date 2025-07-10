<script setup lang="ts">
import formSetup from "@/setup/formbot/scripts/formSetup";

const { form, selectCredentialsRef } = formSetup();
</script>

<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <label class="form-label">Selecione a Credencial</label>
    <BFormSelect v-model="form.creds" :options="selectCredentialsRef" />
  </div>
</template>
