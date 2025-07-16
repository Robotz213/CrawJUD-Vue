import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreLogsBot = defineStore("logs", () => {
  const listLogs = ref<ArrayBotLogs>([]);
  const totalLogs = ref<number>(0);
  const remainingLogs = ref<number>(0);
  const currentPos = ref<number>(0);
  const totalSuccess = ref<number>(0);
  const totalErrors = ref<number>(0);
  const status = ref<string>("Iniciado");
  const current_pid = ref("");
  const contentRef = ref<HTMLDivElement | null>(null);
  return {
    listLogs,
    totalLogs,
    remainingLogs,
    currentPos,
    totalSuccess,
    totalErrors,
    status,
    current_pid,
    contentRef,
  };
});
