import { computed } from "vue";
import { useRouter } from "vue-router";
import varas from "../json/varas.json";
import componentsSetup from "./componentsSetup";
import mountSetup from "./mountSetup";
import refsSetup from "./refsSetup";

export default function () {
  const router = useRouter();
  const {
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

  mountSetup(
    router,
    bot,
    EnabledInputs,
    courtOptions,
    credentialsSelector,
    message,
    selectCredentialsRef,
  );

  const queryCourtOptionsCourt = computed(() => {
    return Array.from(courtOptions.value).filter((item) => {
      if (item.text.toLowerCase().includes(queryCourt.value.toLowerCase())) {
        return true;
      }

      return false;
    });
  });

  async function handleSubmit(e: Event) {
    e.preventDefault();

    overlayFormSubmit.value = true;

    setTimeout(() => {
      overlayFormSubmit.value = false;
    }, 2000);
  }

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

  return {
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
