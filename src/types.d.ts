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

interface CredentialsRecord {
  [key: string]: [{ value?: string | null | boolean | number; text?: string; disabled?: boolean }];
  elaw: [{ value?: string | null | boolean | number; text?: string; disabled?: boolean }];
  projudi: [{ value?: string | null | boolean | number; text?: string; disabled?: boolean }];
  esaj: [{ value?: string | null | boolean | number; text?: string; disabled?: boolean }];
}

export type { BotRecord, CredentialsRecord };
