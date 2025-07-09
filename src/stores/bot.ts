import type { BotRecord } from "@/types";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

interface TypeFormBot {
  xlsx: File | File[] | null;
  creds: string | null;
  parte_name: string | null;
  doc_parte: string | null;
  data_inicio: Date | null;
  data_fim: Date | null;
  polo_parte: null;
  state: string | null;
  varas: string[] | null;
  client: string | null;
  otherfiles: File | File[] | null;
  confirm_fields: boolean;
  periodic_task: boolean;
  days_task: string[];
  task_hour_minute: Date | null;
  task_name: string | null;
  email_notify: string | null;
}

const storeBot = defineStore("bot", () => {
  const botList = ref<BotRecord[]>([]);
  const bot = ref<BotRecord | null>(null);

  const form = reactive<TypeFormBot>({
    xlsx: null,
    creds: null,
    parte_name: null,
    doc_parte: null,
    data_inicio: null,
    data_fim: null,
    polo_parte: null,
    state: null,
    varas: null,
    client: null,
    otherfiles: null,
    confirm_fields: false,
    periodic_task: false,
    task_name: null,
    task_hour_minute: null,
    email_notify: null,
    days_task: [],
  });

  return { bot, botList, form };
});

export { storeBot };
