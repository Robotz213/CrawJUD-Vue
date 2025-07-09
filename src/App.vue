<script setup lang="ts">
import { socketBots } from "@/main";
import { storeBot } from "@/stores/bot";
import { useCredentialsStore } from "@/stores/credentials";
import type { BotRecord, CredentialsRecord } from "@/types";
import { storeToRefs } from "pinia";
import { RouterView } from "vue-router";
import MainFrame from "./components/MainFrame.vue";
const { botList } = storeToRefs(storeBot());
const { credentials } = storeToRefs(useCredentialsStore());

socketBots.emit("bots_list", (botData: BotRecord[]) => {
  botList.value = botData;
});
socketBots.emit("bot_credentials_select", (credentialsData: CredentialsRecord) => {
  credentials.value = credentialsData;
});
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
