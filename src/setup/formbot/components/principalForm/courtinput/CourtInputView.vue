<script setup lang="ts">
import formSetup from "@/setup/formbot/scripts/formSetup";
import type { JsonVaras, keyStates, keySystems, selectCourts } from "@/types/form_types";
import { BFormGroup, BFormSelect, BInput } from "bootstrap-vue-next";
import { onBeforeMount } from "vue";

const { form, queryCourt, queryCourtOptionsCourt, bot, varas, courtOptions } = formSetup();

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
  courtOptions.value.push(...courts);
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
      <BInput placeholder="Filtro de varas" id="input-filter-court" trim v-model="queryCourt" />
    </BFormGroup>
    <BFormSelect
      v-model="form.varas"
      :options="queryCourtOptionsCourt"
      :select-size="4"
      :multiple="true"
    />
  </div>
</template>
