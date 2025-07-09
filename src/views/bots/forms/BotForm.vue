<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, onMounted, onUnmounted, reactive } from "vue";
import { useRouter } from "vue-router";
import ScheduleTaskFormView from "./components/ScheduleTaskFormView.vue";
import SelectCredentialsView from "./components/SelectCredentialsView.vue";
import SelectStateClientView from "./components/SelectStateClientView.vue";
import formConfig from "./formconfig.json";

type Classification = keyof typeof formConfig;

const { bot, form } = storeToRefs(storeBot());
const router = useRouter();
async function handleSubmit(e: Event) {
  e.preventDefault();
}

const Form = reactive({
  periodic_task: false,
});

const tarefaAgendada = computed(() => Form.periodic_task);
onMounted(() => {
  if (bot.value === null) {
    router.push({ name: "bots" });
  }
});

onUnmounted(() => {
  bot.value = null;
});

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
    console.log(isKey);
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
    <form class="card border-0 shadow rounded-3 my-5" @submit="handleSubmit">
      <h4 class="card-header p-4">{{ bot?.display_name }}</h4>
      <div class="card-body p-4 p-sm-5">
        <div class="row g-3 rounded justify-content-center p-3">
          <div
            v-if="EnabledInputs.xlsx"
            class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
          >
            <BFormFile
              v-model="form.xlsx"
              label="Arquivo de execução"
              label-class="form-label"
              class="form-control"
              data-placeholder="Arquivo de execução"
              id="xlsx"
              name="xlsx"
              type="file"
              required
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            />
          </div>
          <div
            class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
            v-if="EnabledInputs.otherfiles"
          >
            <BFormFile
              v-model="form.xlsx"
              label="Arquivo Adicionais"
              label-class="form-label"
              class="form-control"
              data-placeholder="Arquivo Adicionais"
              id="xlsx"
              name="xlsx"
              type="file"
              required
              multiple
              :accept="[
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/pdf',
              ]"
            />
          </div>
          <div
            v-if="EnabledInputs.creds"
            class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
          >
            <label class="form-label" for="creds">Selecione a Credencial</label>
            <SelectCredentialsView />
          </div>
          <div
            v-if="EnabledInputs.state"
            class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
          >
            <label class="form-label" for="state">Selecione o Estado</label>
            <SelectStateClientView />
          </div>
          <div
            v-if="EnabledInputs.client"
            class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
          >
            <label class="form-label" for="state">Selecione o Cliente</label>
            <SelectStateClientView />
          </div>
          <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
            <div class="form-check">
              <input
                class="form-check-input"
                id="confirm_fields"
                name="confirm_fields"
                required
                type="checkbox"
                value="y"
              />
              <label class="form-check-label" for="confirm_fields">
                Confirmo que os dados enviados estão corretos.
              </label>
            </div>
          </div>
          <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="periodic_task"
                name="periodic_task"
                role="switch"
                type="checkbox"
                v-model="Form.periodic_task"
                :value="false"
              />
              <label class="form-check-label" for="periodic_task"
                >Execução periódica (experimental).
              </label>
            </div>
          </div>
          <Transition name="fade" mode="out-in">
            <div
              v-if="tarefaAgendada"
              class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded"
              id="periodic_task_group"
            >
              <ScheduleTaskFormView />
            </div>
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
  </div>
</template>
