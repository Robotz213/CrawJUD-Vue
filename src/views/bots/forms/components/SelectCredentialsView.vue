<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { useCredentialsStore } from "@/stores/credentials";
import messageStore from "@/stores/message";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
const { credentials } = storeToRefs(useCredentialsStore());
const { bot } = storeToRefs(storeBot());
const { message } = storeToRefs(messageStore());
const ex1Options = ref([{}]);
const router = useRouter();
const selected = ref(null);

onBeforeMount(() => {
  if (!credentials.value || !bot.value) return;

  ex1Options.value = credentials.value[bot.value?.system.toLowerCase()];

  if (ex1Options.value.length === 0) {
    message.value = "É necessário cadastrar uma credencial!";
    router.push({ name: "bots" });
  }
});
</script>

<template>
  <BFormSelect v-model="selected" :options="ex1Options" />
</template>
