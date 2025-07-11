import { api } from "@/controllers/axios";
import { useRouter } from "vue-router";
import varas from "../json/varas.json";
import componentsSetup from "./componentsSetup";
import mountSetup from "./mountSetup";
import refsSetup from "./refsSetup";

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
      const response = await api.post("/bot/start_bot", form.value, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.message) {
        isStarted = true;
        msg = response.data.message;
      }
    } catch {
      //
    }

    overlayFormSubmit.value = false;
    message.value = msg;
    if (isStarted) {
      //
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
