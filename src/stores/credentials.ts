import type { CredentialsRecord } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCredentialsStore = defineStore("credentialsStore", () => {
  const credentials = ref<CredentialsRecord | null>(null);

  return { credentials };
});
