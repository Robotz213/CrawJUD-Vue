<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { storeToRefs } from "pinia";
import { computed, onMounted, onUnmounted, reactive } from "vue";
import { useRouter } from "vue-router";
import ScheduleTaskFormView from "./components/ScheduleTaskFormView.vue";
import SelectCredentialsView from "./components/SelectCredentialsView.vue";
import SelectStateClientView from "./components/SelectStateClientView.vue";

const { bot } = storeToRefs(storeBot());
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
</script>

<template>
  <div class="container">
    <form class="card border-0 shadow rounded-3 my-5" @submit="handleSubmit">
      <h4 class="card-header p-4">{{ bot?.display_name }}</h4>
      <div class="card-body p-4 p-sm-5">
        <div class="row g-3 rounded justify-content-center p-3">
          <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
            <label class="form-label" for="xlsx">Arquivo de execução</label>
            <input
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              class="form-control"
              data-placeholder="Arquivo de execução"
              id="xlsx"
              name="xlsx"
              type="file"
            />
          </div>
          <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
            <label class="form-label" for="creds">Selecione a Credencial</label>
            <SelectCredentialsView />
          </div>
          <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
            <label class="form-label" for="state">Selecione o Estado</label>
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

        <a class="btn btn-outline-primary fw-semibold" href="/get_model/1/projudi/capa/projudi_capa"
          >Gerar Modelo</a
        >
      </div>
    </form>
  </div>
</template>
