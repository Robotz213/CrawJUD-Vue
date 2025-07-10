<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { BOverlay } from "bootstrap-vue-next";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import AnotherFilesInputView from "./components/principalForm/AnotherFilesInputView.vue";
import ConfirmInputView from "./components/principalForm/ConfirmInputView.vue";
import CourtInputView from "./components/principalForm/courtinput/CourtInputView.vue";
import PrincipalFileInputView from "./components/principalForm/PrincipalFileInputView.vue";
import SelectClientView from "./components/principalForm/SelectClientView.vue";
import SelectCredentialsView from "./components/principalForm/SelectCredentialsView.vue";
import SelectStateView from "./components/principalForm/SelectStateView.vue";
import EnableScheduleView from "./components/scheduleForm/EnableScheduleView.vue";
import ScheduleTaskFormView from "./components/scheduleForm/ScheduleTaskFormView.vue";
import formConfig from "./formconfig.json";

type Classification = keyof typeof formConfig;

const overlayFormSubmit = ref(false);

const { bot, form } = storeToRefs(storeBot());
const router = useRouter();

const EnabledInputs = reactive<{ [key: string]: boolean }>({
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
            <PrincipalFileInputView v-if="EnabledInputs.xlsx" />
            <AnotherFilesInputView v-if="EnabledInputs.otherfiles" />
            <CourtInputView />
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
