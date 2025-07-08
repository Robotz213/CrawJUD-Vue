import type { BotRecord } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

const storeBot = defineStore("bot", () => {
  const bot = ref<BotRecord | null>(null);

  return { bot };
});

export { storeBot };
