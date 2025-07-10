import type {
  Classification,
  FormConfig,
  FormConfigRecord,
  JsonVaras,
  keyStates,
  keySystems,
  selectCourts,
} from "@/types/form_types";
import { computed, onBeforeMount, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import componentsSetup from "./componentsSetup";
import formConfig from "./formconfig.json";
import refsSetup from "./refsSetup";
import varas from "./varas.json";

const router = useRouter();
const { overlayFormSubmit, bot, form, EnabledInputs, courtOptions, queryCourt } = refsSetup();

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

async function handleSubmit(e: Event) {
  e.preventDefault();

  overlayFormSubmit.value = true;

  setTimeout(() => {
    overlayFormSubmit.value = false;
  }, 2000);
}

export default function () {
  onMounted(() => {
    if (bot.value === null) {
      router.push({ name: "bots" });
    }
  });

  onUnmounted(() => {
    bot.value = null;
  });

  onBeforeMount(() => {
    if (!bot.value?.classification || !bot.value.form_cfg) return;

    const classification = bot.value.classification as Classification;
    const formcfg = bot.value.form_cfg as FormConfig;
    const formconfigClass = formConfig[classification] as FormConfigRecord;
    const formconfigList = formconfigClass[formcfg];

    Object.entries(EnabledInputs).map(([key, value]) => {
      const isKey = Array.from(formconfigList).find((val) => val === key);

      if (isKey) {
        EnabledInputs[key] = !value;
      }
    });
  });

  onBeforeMount(() => {
    if (!(bot.value?.system || bot.value?.state)) return;
    const varasRecord = varas as unknown as JsonVaras;
    const courts: selectCourts[] = [];

    const system = bot.value?.system.toUpperCase() as unknown as keySystems;
    const state = bot.value?.state.toUpperCase() as unknown as keyStates;
    const courtsJson = varasRecord[system][state];

    Object.entries(courtsJson).map(([key, value], index) => {
      courts.push({ value: key, text: value, id: index });
    });
    courtOptions.value.push(...courts);
  });

  onUnmounted(() => {
    Object.entries(EnabledInputs).forEach(([key]) => {
      EnabledInputs[key] = false;
    });
  });

  return {
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
  };
}

const queryCourtOptionsCourt = computed(() => {
  return Array.from(courtOptions.value).filter((item) => {
    if (item.text.toLowerCase().includes(queryCourt.value.toLowerCase())) {
      return true;
    }

    return false;
  });
});
