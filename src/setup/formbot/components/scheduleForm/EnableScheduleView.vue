<script setup lang="ts">
import { storeBot } from "@/stores/bot";
import { storeToRefs } from "pinia";

const { form } = storeToRefs(storeBot());
</script>

<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        id="periodic_task"
        name="periodic_task"
        role="switch"
        type="checkbox"
        v-model="form.periodic_task"
      />
      <label class="form-check-label" for="periodic_task"
        >Execução periódica (experimental).
      </label>
    </div>
  </div>
</template>
