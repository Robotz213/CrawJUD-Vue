import { storeBot } from "@/stores/bot";
import type {
  Classification,
  FormConfig,
  FormConfigRecord,
  TypeEnabledInputs,
} from "@/types/form_types";
import { storeToRefs } from "pinia";
import { onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import CourtInputView from "./components/principalForm/courtinput/CourtInputView.vue";
import AnotherFilesInputView from "./components/principalForm/files/AnotherFilesInputView.vue";
import PrincipalFileInputView from "./components/principalForm/files/PrincipalFileInputView.vue";
import ClasseParteSelectView from "./components/principalForm/inputs/busca_processo/ClasseParteSelectView.vue";
import DocumentParteInputView from "./components/principalForm/inputs/busca_processo/DocumentParteInputView.vue";
import ParteNameInputView from "./components/principalForm/inputs/busca_processo/ParteNameInputView.vue";
import ConfirmInputView from "./components/principalForm/inputs/ConfirmInputView.vue";
import DataFimView from "./components/principalForm/inputs/data_inputs/DataFimView.vue";
import DataInicioView from "./components/principalForm/inputs/data_inputs/DataInicioView.vue";
import SelectClientView from "./components/principalForm/selects/SelectClientView.vue";
import SelectCredentialsView from "./components/principalForm/selects/SelectCredentialsView.vue";
import SelectStateView from "./components/principalForm/selects/SelectStateView.vue";
import EnableScheduleView from "./components/scheduleForm/EnableScheduleView.vue";
import ScheduleTaskFormView from "./components/scheduleForm/ScheduleTaskFormView.vue";
import formConfig from "./formconfig.json";

export default function () {
  const overlayFormSubmit = ref(false);
  const { bot, form } = storeToRefs(storeBot());
  const router = useRouter();
  async function handleSubmit(e: Event) {
    e.preventDefault();

    overlayFormSubmit.value = true;

    setTimeout(() => {
      overlayFormSubmit.value = false;
    }, 2000);
  }

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

  onUnmounted(() => {
    Object.entries(EnabledInputs).forEach(([key]) => {
      EnabledInputs[key] = false;
    });
  });

  const EnabledInputs = reactive<TypeEnabledInputs>({
    xlsx: false,
    creds: false,
    parte_name: false,
    doc_parte: false,
    data_inicio: false,
    data_fim: false,
    polo_parte: false,
    state: false,
    varas: false,
    client: false,
    otherfiles: false,
    confirm_fields: false,
    periodic_task: false,
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
  };
}
