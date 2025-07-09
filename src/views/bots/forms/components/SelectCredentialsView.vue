<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { useCredentialsStore } from "@/stores/credentials";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref } from "vue";

const { credentials } = storeToRefs(useCredentialsStore());
const { bot } = storeToRefs(storeBot());

const ex1Options = ref();

const selected = ref(null);

onBeforeMount(() => {
  if (bot.value && credentials.value) {
    ex1Options.value = credentials.value[bot.value?.system.toLowerCase()];
  }
});
</script>

<template>
  <BFormSelect v-model="selected" :options="ex1Options" />
</template>
