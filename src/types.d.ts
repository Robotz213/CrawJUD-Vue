interface BotRecord {
  system: string;
  state: string;
  type: string;
  classification: string;
  display_name: string;
  id: number;
  client: string;
  form_cfg: string;
  text: string;
}

export type { BotRecord };
