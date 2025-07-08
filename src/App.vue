<script setup lang="ts">
import { RouterView } from "vue-router";
import MainFrame from "./components/MainFrame.vue";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <MainFrame>
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </MainFrame>
  </RouterView>
</template>
