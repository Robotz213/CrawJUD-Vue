<script setup lang="ts">
import formSetup from "@/setup/formbot/scripts/formSetup";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { form, selectCredentialsRef, message, bot, credentialsSelector } = formSetup();

onBeforeMount(() => {
  if (!credentialsSelector.value || !bot.value) return;

  const creds = credentialsSelector.value;
  selectCredentialsRef.value = creds[bot.value?.system.toLowerCase()];

  if (
    Array.isArray(selectCredentialsRef.value) &&
    (selectCredentialsRef.value as unknown[]).length === 0
  ) {
    message.value = "É necessário cadastrar uma credencial!";
    router.push({ name: "bots" });
  }
});
</script>

<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <label class="form-label">Selecione a Credencial</label>
    <BFormSelect v-model="form.creds" :options="selectCredentialsRef" />
  </div>
</template>
