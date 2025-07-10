<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { BFormGroup, BFormSelect, BInput } from "bootstrap-vue-next";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, ref } from "vue";
import varas from "./varas.json";
const selected = ref(null);
const { bot } = storeToRefs(storeBot());

type keySystems = "PJE" | "PROJUDI" | "ESAJ";
type keyStates = "AM";
type Varas = { [key: string]: string };

type JsonVaras = {
  [key in keySystems]: {
    [key in keyStates]: Varas;
  };
};

type selectCourts = {
  value: string | number | null;
  text: string;
  disabled?: boolean;
  id?: string | number;
};

const ex1Options = ref<selectCourts[]>([]);

const query = ref("");

const queryOptionsCourt = computed(() => {
  return Array.from(ex1Options.value).filter((item) => {
    if (item.text.toLowerCase().includes(query.value.toLowerCase())) {
      return true;
    }

    return false;
  });
});

onBeforeMount(() => {
  if (!(bot.value?.system || bot.value?.state)) return;
  const varasRecord = varas as unknown as JsonVaras;
  const courts: selectCourts[] = [];

  const system = bot.value?.system.toUpperCase() as unknown as keySystems;
  const state = bot.value?.state.toUpperCase() as unknown as keyStates;
  const courtsJson = varasRecord[system][state];

  Object.entries(courtsJson).map(([key, value], index) => {
    courts.push({ value: key, text: value, id: index });
  });
  ex1Options.value.push(...courts);
});
</script>

<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded" data-select2-id="22">
    <label class="form-label" for="varas">Selecione a Vara</label>
    <BFormGroup
      class="mb-4"
      id="fieldset-filter-court"
      label-for="input-filter-court"
      floating
      label="Filtre Aqui"
      description="Filtre por aqui as varas desejadas"
    >
      <BInput placeholder="Filtro de varas" id="input-filter-court" trim v-model="query" />
    </BFormGroup>
    <BFormSelect
      v-model="selected"
      :options="queryOptionsCourt"
      :select-size="4"
      :multiple="true"
    />
  </div>
</template>
