<script setup lang="ts">
import { BOverlay } from "bootstrap-vue-next";
import { computed, ref, watch } from "vue";

import { FileSocket } from "@/main";
import formSetup from "@/setup/formbot/scripts/formSetup";

const uploadingFile = ref(false);
const currentPos = ref(0);
const valorTotal = ref(0);
const {
  progressBar,
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

async function uploadFiles(files: File[]) {
  valorTotal.value = files.length;
  progressBar.value = 0.1;
  for (let i = 0; i < files.length; i++) {
    setTimeout(async () => {
      const file = files[i];
      const filename = file.name;
      FileSocket.emit(
        "add_file",
        {
          file: {
            name: filename,
            content_type: file.type,
            file: await file.arrayBuffer(),
            content_length: file.size,
          },
        },
        () => {
          setTimeout(() => {
            currentPos.value += 1;
          }, 1500);
        },
      );
    }, 1500);
  }
}

watch(currentPos, (newValue) => {
  progressBar.value = Math.round((newValue / valorTotal.value) * 100);
});

watch(
  () => form.value.xlsx,
  async (newFiles: File | File[] | string | null) => {
    uploadingFile.value = true;

    if (newFiles && typeof newFiles !== "string") {
      await uploadFiles(Array.isArray(newFiles) ? newFiles : [newFiles]);
    }
  },
);

watch(
  () => form.value.otherfiles,
  async (newFiles: File | File[] | string | string[] | null) => {
    uploadingFile.value = true;

    if (newFiles && typeof newFiles !== "string") {
      await uploadFiles(Array.isArray(newFiles) ? (newFiles as File[]) : [newFiles]);
    }
  },
);

watch(progressBar, (newValue) => {
  if (newValue >= 99) {
    setTimeout(() => {
      progressBar.value = 0;
      uploadingFile.value = false;
      valorTotal.value = 0;
      currentPos.value = 0;
    }, 750);
  }
});

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
            <div
              v-if="EnabledInputs.xlsx || EnabledInputs.otherfiles"
              class="row col-10 rounded rounded-4 border border-4 p-2"
            >
              <PrincipalFileInputView v-if="EnabledInputs.xlsx" />
              <AnotherFilesInputView v-if="EnabledInputs.otherfiles" />
              <Transition name="fade" mode="out-in">
                <div v-if="progressBar > 0" class="col-md-12">
                  <BProgress :value="progressBar" />
                </div>
              </Transition>
            </div>
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
          <Transition name="fade" mode="out-in" :duration="500">
            <div v-if="form.confirm_fields" class="d-grid">
              <button
                :disabled="uploadingFile || !(EnabledInputs.xlsx || EnabledInputs.otherfiles)"
                class="btn btn btn-outline-success btn-login fw-semibold"
                id="submit"
                name="submit"
                type="submit"
              >
                Iniciar Execução
              </button>
            </div>
          </Transition>
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
