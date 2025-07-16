<script setup lang="ts">
import { socketBots } from "@/main";
import { storeBot } from "@/stores/bot";
import { useCredentialsStore } from "@/stores/credentials";
import { storeToRefs } from "pinia";
import { RouterView } from "vue-router";
import MainFrame from "./components/MainFrame.vue";

const { botList } = storeToRefs(storeBot());
const { credentialsSelector } = storeToRefs(useCredentialsStore());

socketBots.emit("bots_list", (botData: BotRecord[]) => {
  botList.value = botData;
});
socketBots.emit("bot_credentials_select", (credentialsData: CredentialsSelectorRecord) => {
  credentialsSelector.value = credentialsData;
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
