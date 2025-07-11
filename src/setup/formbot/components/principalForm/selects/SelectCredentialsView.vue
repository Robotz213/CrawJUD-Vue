<script setup lang="ts">
import { socketBots } from "@/main";
import formSetup from "@/setup/formbot/scripts/formSetup";
import type { CredentialsSelectorRecord } from "@/types";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { form, selectCredentialsRef, message, bot, credentialsSelector } = formSetup();

onBeforeMount(() => {
  if (!credentialsSelector.value) {
    socketBots.emit("bot_credentials_select", (credentialsData: CredentialsSelectorRecord) => {
      credentialsSelector.value = credentialsData;
    });
  }
  if (!bot.value) {
    router.push({ name: "bots" });
    return;
  }

  setTimeout(() => {
    const creds = credentialsSelector.value;
    if (creds && bot.value) {
      selectCredentialsRef.value = creds[bot.value?.system.toLowerCase()];
      if ((selectCredentialsRef.value as unknown[]).length === 1) {
        message.value = "É necessário cadastrar uma credencial!";
        router.push({ name: "bots" });
      }
    }
  }, 750);
});
</script>

<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <label class="form-label">Selecione a Credencial</label>
    <BFormSelect v-model="form.creds" :options="selectCredentialsRef" />
  </div>
</template>
