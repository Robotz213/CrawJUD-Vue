<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { storeToRefs } from "pinia";
import SelectButtonsView from "./SelectButtonsView.vue";

const { form } = storeToRefs(storeBot());
const elements = [
  { id: "item-0", name: "sun", label: "Domingo", value: null },
  { id: "item-1", name: "mon", label: "Segunda", value: null },
  { id: "item-2", name: "tue", label: "Terça", value: null },
  { id: "item-3", name: "Wed", label: "Quarta", value: null },
  { id: "item-4", name: "thu", label: "Quinta", value: null },
  { id: "item-5", name: "fri", label: "Sexta", value: null },
  { id: "item-6", name: "sat", label: "Sábado", value: null },
];
</script>

<template>
  <div>
    <div class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
      <label class="form-label" for="periodic_task_group-0-task_name">Nome da tarefa</label>
      <input
        class="form-control"
        data-placeholder=""
        id="periodic_task_group-0-task_name"
        name="periodic_task_group-0-task_name"
        type="text"
        v-model="form.task_name"
      />
    </div>
    <div class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
      <label class="form-label" for="periodic_task_group-0-hour_minute">Hora de execução</label>
      <input
        class="form-control"
        data-placeholder="Hora de execução"
        id="periodic_task_group-0-hour_minute"
        name="periodic_task_group-0-hour_minute"
        type="time"
        v-model="form.task_hour_minute"
      />
    </div>
    <div class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
      <span class="tex">
        <label class="form-label" for="periodic_task_group-0-days">Dias de execução</label>
      </span>
      <hr />
      <SelectButtonsView v-bind:elements="elements" v-model="form.days_task" />
    </div>
    <div class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
      <label class="form-label" for="periodic_task_group-0-email_notify">
        E-mail para notificação
      </label>
      <input
        class="form-control"
        data-placeholder="E-mail para notificação"
        id="periodic_task_group-0-email_notify"
        name="periodic_task_group-0-email_notify"
        type="email"
        v-model="form.email_notify"
      />
    </div>
  </div>
</template>
