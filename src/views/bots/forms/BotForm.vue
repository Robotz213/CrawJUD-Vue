<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { storeToRefs } from "pinia";
import { computed, onUnmounted, reactive } from "vue";

const { bot } = storeToRefs(storeBot());

async function handleSubmit(e: Event) {
  e.preventDefault();
}

const Form = reactive({
  periodic_task: false,
});

const tarefaAgendada = computed(() => Form.periodic_task);

onUnmounted(() => {
  bot.value = null;
});
</script>

<template>
  <div class="container">
    <form class="card border-0 shadow rounded-3 my-5" @submit="handleSubmit">
      <h4 class="card-header p-4">{{ bot?.display_name }}</h4>

      <div class="card-body bg-warning bg-opacity-75 p-4 p-sm-5">
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
            <select
              class="form-control select2-hidden-accessible"
              data-placeholder="Selecione a Credencial"
              id="creds"
              name="creds"
              required
              data-select2-id="creds"
              tabindex="-1"
              aria-hidden="true"
            >
              <option value="" data-select2-id="2">Selecione</option>
              <option value="DRA PAULA PROJUDI">DRA PAULA PROJUDI</option>
              <option value="DRA KATHYA PROJUDI">DRA KATHYA PROJUDI</option>
              <option value="Evila Projudi">Evila Projudi</option></select
            ><span
              class="select2 select2-container select2-container--bootstrap-5"
              dir="ltr"
              data-select2-id="1"
              ><span class="selection"
                ><span
                  class="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabindex="0"
                  aria-disabled="false"
                  aria-labelledby="select2-creds-container"
                  ><span
                    class="select2-selection__rendered"
                    id="select2-creds-container"
                    role="textbox"
                    aria-readonly="true"
                    ><span class="select2-selection__placeholder"
                      >Selecione a Credencial</span
                    ></span
                  ><span class="select2-selection__arrow" role="presentation"
                    ><b role="presentation"></b></span></span></span
              ><span class="dropdown-wrapper" aria-hidden="true"></span
            ></span>
          </div>

          <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
            <label class="form-label" for="state">Selecione o Estado</label>
            <select
              class="form-control select2-hidden-accessible"
              data-placeholder="Selecione o Estado"
              id="state"
              name="state"
              required
              data-select2-id="state"
              tabindex="-1"
              aria-hidden="true"
            >
              <option value="" data-select2-id="4">Selecione</option>
              <option value="AM">AM</option></select
            ><span
              class="select2 select2-container select2-container--bootstrap-5"
              dir="ltr"
              data-select2-id="3"
              ><span class="selection"
                ><span
                  class="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabindex="0"
                  aria-disabled="false"
                  aria-labelledby="select2-state-container"
                  ><span
                    class="select2-selection__rendered"
                    id="select2-state-container"
                    role="textbox"
                    aria-readonly="true"
                    ><span class="select2-selection__placeholder">Selecione o Estado</span></span
                  ><span class="select2-selection__arrow" role="presentation"
                    ><b role="presentation"></b></span></span></span
              ><span class="dropdown-wrapper" aria-hidden="true"></span
            ></span>
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
              <label class="form-check-label" for="confirm_fields"
                >Confirmo que os dados enviados estão corretos.</label
              >
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
                >Execução periódica (experimental).</label
              >
            </div>
          </div>
          <Transition name="fade" mode="out-in">
            <div
              v-if="tarefaAgendada"
              class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded"
              id="periodic_task_group"
            >
              <input
                id="periodic_task_group-0-csrf_token"
                name="periodic_task_group-0-csrf_token"
                type="hidden"
                value="ImJjZGIxOTY0MTU4NjliOWQxMDc4YTdkNDg1ZjgxMjlmOWMzYWE4YmYi.aG2FFQ.lzipc07CS70XxvkWpTgM0N20yT8"
              />
              <div>
                <div
                  class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
                >
                  <label class="form-label" for="periodic_task_group-0-task_name"
                    >Nome da tarefa</label
                  >
                  <input
                    class="form-control"
                    data-placeholder=""
                    id="periodic_task_group-0-task_name"
                    name="periodic_task_group-0-task_name"
                    type="text"
                    value=""
                  />
                </div>
                <div
                  class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
                >
                  <label class="form-label" for="periodic_task_group-0-hour_minute"
                    >Hora de execução</label
                  >
                  <input
                    class="form-control"
                    data-placeholder="Hora de execução"
                    id="periodic_task_group-0-hour_minute"
                    name="periodic_task_group-0-hour_minute"
                    type="time"
                    value="09:15"
                  />
                </div>
                <div
                  class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
                >
                  <span class="tex"
                    ><label class="form-label" for="periodic_task_group-0-days"
                      >Dias de execução</label
                    ></span
                  >
                  <hr />
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="periodic_task_group-0-days-0"
                      name="periodic_task_group-0-days"
                      value="sun"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-0"
                      >Domingo</label
                    >

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="periodic_task_group-0-days-1"
                      name="periodic_task_group-0-days"
                      value="mon"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-1"
                      >Segunda</label
                    >

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="periodic_task_group-0-days-2"
                      name="periodic_task_group-0-days"
                      value="tue"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-2"
                      >Terça</label
                    >

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="periodic_task_group-0-days-3"
                      name="periodic_task_group-0-days"
                      value="wed"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-3"
                      >Quarta</label
                    >

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="periodic_task_group-0-days-4"
                      name="periodic_task_group-0-days"
                      value="thu"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-4"
                      >Quinta</label
                    >

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="periodic_task_group-0-days-5"
                      name="periodic_task_group-0-days"
                      value="fri"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-5"
                      >Sexta</label
                    >

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="periodic_task_group-0-days-6"
                      name="periodic_task_group-0-days"
                      value="sat"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-6"
                      >Sábado</label
                    >
                  </div>
                </div>
                <div
                  class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary"
                >
                  <label class="form-label" for="periodic_task_group-0-email_notify"
                    >E-mail para notificação</label
                  >
                  <input
                    class="form-control"
                    data-placeholder="E-mail para notificação"
                    id="periodic_task_group-0-email_notify"
                    name="periodic_task_group-0-email_notify"
                    type="email"
                    value=""
                  />
                </div>
              </div>
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
