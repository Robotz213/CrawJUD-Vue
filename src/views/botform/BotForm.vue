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
      await sendFileInChunks(file, 81920); // Envia o arquivo em chunks de 80KB
      currentPos.value += 1;
    }, 1500);
  }
}

/**
 * Envia um arquivo grande em chunks via WebSocket.
 *
 * @param {File} file - Arquivo a ser enviado.
 * @param {number} chunkSize - Tamanho de cada chunk em bytes.
 * @returns {Promise<void>} Resolve quando o envio termina.
 * @throws {Error} Se ocorrer erro durante o envio.
 */
async function sendFileInChunks(file: File, chunkSize: number = 1024): Promise<void> {
  const totalChunks = Math.ceil(file.size / 1024);
  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize;
    const end = Math.min(file.size, start + chunkSize);

    const chunk = file.slice(start, end);
    const arrayBuffer = await chunk.arrayBuffer();
    await new Promise<void>((resolve, reject) => {
      FileSocket.emit(
        "add_file",
        {
          data: {
            name: file.name,
            index: i,
            chunksize: chunkSize,
            file_size: file.size,
            total: totalChunks,
            chunk: arrayBuffer,
            content_type: file.type,
          },
        },
        (err: Error | null) => {
          if (err) reject(err);
          else resolve();
        },
      );
    });
    // Atualiza a barra de progresso apenas para o arquivo atual
    progressBar.value = Math.round(
      ((currentPos.value + (i + 2) / totalChunks) / valorTotal.value) * 100,
    );
    if (end >= file.size) {
      break;
    }
  }
}

watch(currentPos, (newValue) => {
  progressBar.value = Math.round((newValue / valorTotal.value) * 100);
});

watch(
  () => form.value.xlsx,
  async (newFiles: FileInputType) => {
    uploadingFile.value = true;

    const files = newFiles as File[];
    if (newFiles && typeof newFiles !== "string") {
      await uploadFiles(Array.isArray(files) ? files : [files]);
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
