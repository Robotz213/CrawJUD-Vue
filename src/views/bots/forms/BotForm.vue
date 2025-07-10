<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { BOverlay } from "bootstrap-vue-next";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
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
import type { TypeEnabledInputs } from "./components/types";
import formConfig from "./formconfig.json";

type Classification = keyof typeof formConfig;

const overlayFormSubmit = ref(false);

const { bot, form } = storeToRefs(storeBot());
const router = useRouter();

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

async function handleSubmit(e: Event) {
  e.preventDefault();

  overlayFormSubmit.value = true;

  setTimeout(() => {
    overlayFormSubmit.value = false;
  }, 2000);
}

const tarefaAgendada = computed(() => form.value.periodic_task);
onMounted(() => {
  if (bot.value === null) {
    router.push({ name: "bots" });
  }
  console.log(bot.value);
});

onUnmounted(() => {
  bot.value = null;
});

onBeforeMount(() => {
  if (!bot.value?.classification) return;
  if (!bot.value.form_cfg) return;
  const classification = bot.value.classification as Classification;
  type FormConfig = keyof (typeof formConfig)[typeof classification];

  const formcfg = bot.value.form_cfg as FormConfig;
  const formconfigClass = formConfig[classification];
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
</script>

<template>
  <div class="container">
    <BOverlay :show="overlayFormSubmit" rounded="sm" opacity="0.3">
      <form class="card border-0 shadow rounded-3 my-5" @submit="handleSubmit">
        <h4 class="card-header p-4">{{ bot?.display_name }}</h4>
        <div class="card-body p-4 p-sm-5">
          <div class="row g-3 rounded justify-content-center p-3">
            <ParteNameInputView v-if="EnabledInputs.parte_name" />
            <DocumentParteInputView v-if="EnabledInputs.doc_parte" />
            <ClasseParteSelectView v-if="EnabledInputs.polo_parte" />
            <DataInicioView v-if="EnabledInputs.data_inicio" />
            <DataFimView v-if="EnabledInputs.data_fim" />
            <PrincipalFileInputView v-if="EnabledInputs.xlsx" />
            <AnotherFilesInputView v-if="EnabledInputs.otherfiles" />
            <CourtInputView v-if="EnabledInputs.varas" />
            <SelectCredentialsView v-if="EnabledInputs.creds" />
            <SelectStateView v-if="EnabledInputs.state" />
            <SelectClientView v-if="EnabledInputs.client" />
            <ConfirmInputView />
            <EnableScheduleView />
            <Transition name="fade" mode="out-in">
              <ScheduleTaskFormView v-if="tarefaAgendada" />
            </Transition>
          </div>
        </div>
        <div class="card-footer d-grid gap-2">
          <input
            class="btn btn btn-outline-success btn-login fw-semibold"
            id="submit"
            name="submit"
            onclick="showLoad()"
            type="submit"
            value="Iniciar Execução"
          />

          <a
            disabled
            class="btn btn-outline-primary fw-semibold"
            href="/get_model/1/projudi/capa/projudi_capa"
          >
            Gerar Modelo
          </a>
        </div>
      </form>
    </BOverlay>
  </div>
</template>
