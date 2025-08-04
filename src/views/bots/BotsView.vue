<script setup lang="ts">
import logoEsaj from "@/assets/img/esaj3.png";
import crawjud from "@/assets/img/figure_crawjud.png";
import logoElaw from "@/assets/img/logoelaw.png";
import logoPJE1 from "@/assets/img/pje.png";
import logoPJE2 from "@/assets/img/pje2.png";
import logoProjudi from "@/assets/img/projudilogo.png";
import { storeBot } from "@/stores/bot";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const { bot, botList } = storeToRefs(storeBot());
const query = ref("");
const filterBots = computed(() =>
  Array.from(botList.value).filter((item) =>
    item.display_name?.toLowerCase().includes(query.value.toLowerCase()),
  ),
);

const current_theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const imagesSrc: { [key: string]: string } = {
  projudi: logoProjudi,
  esaj: logoEsaj,
  elaw: logoElaw,
  pje: current_theme === "dark" ? logoPJE1 : logoPJE2,
};

function getLogo(system: string) {
  return imagesSrc[system] || crawjud;
}

function handleBotSelected(botInfo: BotRecord) {
  bot.value = botInfo;
  router.push({
    name: "bot_form",
    params: {
      bot_id: botInfo.id,
      bot_system: botInfo.system.toLowerCase(),
      bot_type: botInfo.type.toLowerCase(),
    },
  });
}

const class_logo: { [key: string]: string } = {
  pje: "card-img-top p-4 img-thumbnail imgBot",
  esaj:
    current_theme === "dark"
      ? "card-img-top p-4 img-thumbnail imgBot"
      : "card-img-top p-4 img-thumbnail imgBot bg-secondary",
  projudi:
    current_theme === "dark"
      ? "card-img-top p-4 img-thumbnail imgBot bg-white"
      : "card-img-top p-4 img-thumbnail imgBot",
  elaw:
    current_theme === "dark"
      ? "card-img-top p-4 img-thumbnail imgBot bg-white"
      : "card-img-top p-4 img-thumbnail imgBot",
};

function getClassImgLogo(system: string) {
  return class_logo[system] || "card-img-top p-4 img-thumbnail imgBot";
}
</script>

<template>
  <div class="container">
    <div class="card-header mb-4">
      <h1 class="m-1">Robôs</h1>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-12">
          <div class="form-floating mb-3">
            <input
              type="search"
              class="form-control"
              id="floatingInput"
              placeholder="..."
              v-model="query"
            />
            <label class="fw-semibold" for="floatingInput">Buscar Robô</label>
          </div>
          <hr />
        </div>
        <div class="col-md-12">
          <Transition mode="out-in" name="fade">
            <div
              class="row g-4"
              v-if="filterBots.every((value) => value.display_name === 'CARREGANDO...')"
            >
              <BPlaceholderWrapper loading>
                <template #loading>
                  <div v-for="(bot, index) in filterBots" :key="index" class="col-md-3 p-4">
                    <BPlaceholderCard style="min-height: 430px" no-img />
                  </div>
                </template>
              </BPlaceholderWrapper>
            </div>
            <TransitionGroup v-else class="row g-4" name="fade" mode="out-in" tag="div">
              <div
                class="col-md-3 p-4"
                v-for="(bot, index) in filterBots"
                :key="bot.display_name"
                :data-index="index"
              >
                <div class="card border border-dark border-3 rounded" style="min-height: 430px">
                  <h6 class="card-header bg-secondary bg-opacity-25 fw-bold">
                    {{ bot.display_name }}
                  </h6>
                  <img
                    :src="getLogo(bot.system?.toLocaleLowerCase())"
                    :alt="`Logo Sistema ${bot.system?.toLowerCase()}`"
                    :class="getClassImgLogo(bot.system.toLowerCase())"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">
                      {{ bot.text }}
                    </h5>
                  </div>
                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <button class="btn btn-success fw-semibold" @click="handleBotSelected(bot)">
                      Acessar Robô
                    </button>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="css">
.imgBot {
  min-height: 200px;
  object-fit: contain;
  width: 100%;
  height: 200px;
}
</style>
