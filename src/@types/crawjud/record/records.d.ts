interface CredentialsRecord {
  id: number;
  nome_credencial: string;
  system: string;
  login_method: string;
}

interface CredentialsSelectorRecord {
  [key: string]: SelectCredentialsRefType;
  elaw: SelectCredentialsRefType;
  projudi: SelectCredentialsRefType;
  esaj: SelectCredentialsRefType;
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

interface ExecutionDataRecord {
  pid: string;
  user: string;
  botname: string;
  xlsx: string;
  start_date: string;
  status: string;
  stop_date: string;
  file_output: string;
}

interface FormConfigRecord {
  [key: FormConfig | string]: string[];
}
