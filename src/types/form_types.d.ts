type keySystems = "PJE" | "PROJUDI" | "ESAJ";
type keyStates = "AM";
type Varas = { [key: string]: string };

interface SelectProperties {
  id: string;
  name: string;
  label: string;
}

interface JsonVaras {
  [key: string | keySystems]: {
    [key: string | keyStates]: Varas;
  };
}

type selectCourts = {
  value: string | number | null;
  text: string;
  disabled?: boolean;
  id?: string | number;
};

interface TypeEnabledInputs {
  [key: string]: boolean;
  xlsx: boolean;
  creds: boolean;
  parte_name: boolean;
  doc_parte: boolean;
  data_inicio: boolean;
  data_fim: boolean;
  polo_parte: boolean;
  state: boolean;
  varas: boolean;
  client: boolean;
  otherfiles: boolean;
  confirm_fields: boolean;
  periodic_task: boolean;
}

type Classification = "JURIDICO" | "ADMINISTRATIVO" | "INTERNO";
type FormConfig =
  | "only_auth"
  | "file_auth"
  | "multiple_files"
  | "only_file"
  | "pautas"
  | "proc_parte";

interface FormConfigRecord {
  [key: FormConfig | string]: string[];
}

export type {
  Classification,
  FormConfig,
  FormConfigRecord,
  JsonVaras,
  keyStates,
  keySystems,
  selectCourts,
  SelectProperties,
  TypeEnabledInputs,
  Varas,
};
