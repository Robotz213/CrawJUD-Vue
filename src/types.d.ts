import type { AxiosResponse } from "axios";

interface ExecutionData {
  pid: string;
  user: string;
  botname: string;
  xlsx: string;
  start_date: string;
  status: string;
  stop_date: string;
  file_output: string;
}

interface CredentialsRecord {
  id: number;
  nome_credencial: string;
  system: string;
  login_method: string;
}

interface ResponseCredentials extends AxiosResponse {
  data?: {
    database?: CredentialsRecord[];
  };
}

interface ResponseData extends AxiosResponse {
  data: {
    data?: ExecutionData[];
  };
}

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

interface CredentialsSelectorRecord {
  [key: string]: [{ value?: string | null | boolean | number; text?: string; disabled?: boolean }];
  elaw: [{ value?: string | null | boolean | number; text?: string; disabled?: boolean }];
  projudi: [{ value?: string | null | boolean | number; text?: string; disabled?: boolean }];
  esaj: [{ value?: string | null | boolean | number; text?: string; disabled?: boolean }];
}

export type {
  BotRecord,
  CredentialsRecord,
  CredentialsSelectorRecord,
  ExecutionData,
  ResponseCredentials,
  ResponseData,
};
