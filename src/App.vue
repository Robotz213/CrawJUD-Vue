<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in" :duration="{ enter: 0.1, leave: 0.1 }">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>
