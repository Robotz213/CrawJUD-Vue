<script setup lang="ts">
import { BOverlay } from "bootstrap-vue-next";
import { computed } from "vue";

import formSetup from "../../../setup/formbot/formSetup";

const {
  overlayFormSubmit,
  form,
  bot,
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
} = formSetup();

const tarefaAgendada = computed(() => form.value.periodic_task);
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
