<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { useCredentialsStore } from "@/stores/credentials";
import { useMessageStore } from "@/stores/message";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
const { credentialsSelector } = storeToRefs(useCredentialsStore());
const { bot } = storeToRefs(storeBot());
const { message } = storeToRefs(useMessageStore());
const ex1Options = ref([{}]);
const router = useRouter();
const selected = ref(null);

onBeforeMount(() => {
  if (!credentialsSelector.value || !bot.value) return;

  ex1Options.value = credentialsSelector.value[bot.value?.system.toLowerCase()];

  if (ex1Options.value.length === 0) {
    message.value = "É necessário cadastrar uma credencial!";
    router.push({ name: "bots" });
  }
});
</script>

<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <label class="form-label">Selecione a Credencial</label>
    <BFormSelect v-model="selected" :options="ex1Options" />
  </div>
</template>
