import type { CredentialsRecord, CredentialsSelectorRecord } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCredentialsStore = defineStore("credentialsStore", () => {
  const credentialsSelector = ref<CredentialsSelectorRecord | null>(null);
  const credentialsList = ref<CredentialsRecord[] | null>(null);

  return { credentialsSelector, credentialsList };
});
