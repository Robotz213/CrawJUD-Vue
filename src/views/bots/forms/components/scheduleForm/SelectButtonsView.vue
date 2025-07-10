<script setup lang="ts">
import type { SelectProperties } from "../types";

const props = defineProps({
  elements: {
    type: Array as () => SelectProperties[],
    default: () => [],
  },
  modelValue: {
    type: Array as () => string[],
    default: () => [],
  },
});

const emits = defineEmits(["update:modelValue"]);

function sendUpdate(event: Event) {
  const ev: HTMLInputElement = event.target as unknown as HTMLInputElement;

  const newValue = [...props.modelValue];
  const index = newValue.indexOf(ev.name);

  if (ev.checked) {
    if (index === -1) {
      newValue.push(ev.name);
    }
  } else {
    if (index !== -1) {
      newValue.splice(index, 1);
    }
  }

  emits("update:modelValue", newValue);
}
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <div class="m-1" v-for="item in props.elements" :key="item.id">
      <input
        type="checkbox"
        class="btn-check"
        :id="item.id"
        :name="item.name"
        autocomplete="off"
        @input="sendUpdate($event)"
      />
      <label class="btn btn-outline-primary" :for="item.id">{{ item.label }}</label>
    </div>

    <!-- <input
      type="checkbox"
      class="btn-check"
      id="periodic_task_group-0-days-1"
      name="periodic_task_group-0-days"
      value="mon"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-1">Segunda</label>
    <input
      type="checkbox"
      class="btn-check"
      id="periodic_task_group-0-days-2"
      name="periodic_task_group-0-days"
      value="tue"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-2">Terça</label>
    <input
      type="checkbox"
      class="btn-check"
      id="periodic_task_group-0-days-3"
      name="periodic_task_group-0-days"
      value="wed"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-3">Quarta</label>
    <input
      type="checkbox"
      class="btn-check"
      id="periodic_task_group-0-days-4"
      name="periodic_task_group-0-days"
      value="thu"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-4">Quinta</label>
    <input
      type="checkbox"
      class="btn-check"
      id="periodic_task_group-0-days-5"
      name="periodic_task_group-0-days"
      value="fri"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-5">Sexta</label>
    <input
      type="checkbox"
      class="btn-check"
      id="periodic_task_group-0-days-6"
      name="periodic_task_group-0-days"
      value="sat"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="periodic_task_group-0-days-6">Sábado</label> -->
  </div>
</template>
