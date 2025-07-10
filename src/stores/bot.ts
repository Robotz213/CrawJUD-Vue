import type { BotRecord } from "@/types";
import type { TypeFormBot } from "@/types/form_types";
import setupData from "@/utils/setupData";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import botListJson from "./botsList.json";

const storeBot = defineStore("bot", () => {
  const jsonlistBot = botListJson as unknown as BotRecord[];
  const botList = ref<BotRecord[]>(jsonlistBot);
  const bot = ref<BotRecord | null>(null);
  const { getDate } = setupData();
  const dateTime = getDate();
  const form = reactive<TypeFormBot>({
    xlsx: null,
    creds: null,
    parte_name: null,
    doc_parte: null,
    data_inicio: dateTime,
    data_fim: dateTime,
    polo_parte: null,
    state: null,
    varas: [],
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
