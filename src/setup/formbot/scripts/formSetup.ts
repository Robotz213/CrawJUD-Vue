import { api } from "@/controllers/axios";
import { isAxiosError } from "axios";
import { useRouter } from "vue-router";
import varas from "../json/varas.json";
import componentsSetup from "./componentsSetup";
import mountSetup from "./mountSetup";
import refsSetup from "./refsSetup";

type TratamentoArquivosParams = {
  xlsx?: File | File[] | string;
  otherfiles?: File | File[] | string;
};

export default function () {
  const router = useRouter();
  const {
    progressBar,
    queryCourtOptionsCourt,
    overlayFormSubmit,
    bot,
    form,
    EnabledInputs,
    courtOptions,
    queryCourt,
    credentialsSelector,
    message,
    selectCredentialsRef,
    stateOptions,
  } = refsSetup();
  const {
    CourtInputView,
    ClasseParteSelectView,
    AnotherFilesInputView,
    PrincipalFileInputView,
    DocumentParteInputView,
    ParteNameInputView,
    ConfirmInputView,
    DataFimView,
    DataInicioView,
    SelectClientView,
    SelectCredentialsView,
    SelectStateView,
    EnableScheduleView,
    ScheduleTaskFormView,
  } = componentsSetup();

  mountSetup(router, bot, EnabledInputs, courtOptions);

  async function handleSubmit(e: Event) {
    if (!bot.value?.id) return;
    e.preventDefault();

    overlayFormSubmit.value = true;

    form.value.bot_id = bot.value.id;
    let msg = "Erro ao Iniciar o robô";
    let isStarted = false;
    try {
      if (EnabledInputs.xlsx) {
        await TratamentoArquivos({
          xlsx: form.value.xlsx as File,
          otherfiles: form.value.otherfiles as File[],
        });
      }

      const response: BotStartResponse = await api.post("/bot/start_bot", form.value, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.message && response.data.pid) {
        isStarted = true;
        msg = response.data.message;
        const pid = response.data.pid;
        router.push({ name: "logs_execution", params: { pid: pid } });
      }
    } catch (err) {
      if (isAxiosError(err) && err.status) {
        if (err.status != 500) {
          router.push({ name: "bots" });
        }
      }
    }

    overlayFormSubmit.value = false;
    message.value = msg;
    if (isStarted) {
    }
  }

  async function TratamentoArquivos(params: TratamentoArquivosParams) {
    const { xlsx, otherfiles } = params;

    const fileListXlsx = Array.isArray(xlsx) ? (xlsx as File[]) : [xlsx as File];
    for (const f of fileListXlsx) {
      const file = f as File;
      form.value.xlsx = file.name;
    }
    if (otherfiles) {
      const newFileList = [];
      const otherFilesList = Array.isArray(otherfiles) ? otherfiles : [otherfiles];
      for (const f of otherFilesList) {
        const file = f as File;
        newFileList.push(file.name);
      }
      form.value.otherfiles = newFileList;
    }
  }
  return {
    progressBar,
    message,
    credentialsSelector,
    selectCredentialsRef,
    handleSubmit,
    EnabledInputs,
    CourtInputView,
    ClasseParteSelectView,
    AnotherFilesInputView,
    PrincipalFileInputView,
    DocumentParteInputView,
    ParteNameInputView,
    ConfirmInputView,
    DataFimView,
    DataInicioView,
    SelectClientView,
    SelectCredentialsView,
    SelectStateView,
    EnableScheduleView,
    ScheduleTaskFormView,
    bot,
    form,
    overlayFormSubmit,
    queryCourt,
    queryCourtOptionsCourt,
    courtOptions,
    varas,
    stateOptions,
  };
}
