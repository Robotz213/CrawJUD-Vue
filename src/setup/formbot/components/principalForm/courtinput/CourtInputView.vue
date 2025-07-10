<script setup lang="ts">
import formSetup from "@/setup/formbot/formSetup";
import { BFormGroup, BFormSelect, BInput } from "bootstrap-vue-next";

const { form, queryCourt, queryCourtOptionsCourt } = formSetup();
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
