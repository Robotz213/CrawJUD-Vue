<script setup lang="ts">
import logoElaw from "@/assets/img/elaw.png";
import logoEsaj from "@/assets/img/esaj2.png";
import crawjud from "@/assets/img/figure_crawjud.png";
import logoProjudi from "@/assets/img/projudi.png";
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

const imagesSrc: { [key: string]: string } = {
  projudi: logoProjudi,
  esaj: logoEsaj,
  elaw: logoElaw,
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
          <div class="row g-4">
            <TransitionGroup name="fade" css>
              <div
                class="col-md-3 p-4"
                v-for="(bot, index) in filterBots"
                :key="bot.display_name"
                :data-index="index"
              >
                <div class="card border border-dark border-3 rounded" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">{{ bot.display_name }}</h5>
                  <img
                    :src="getLogo(bot.system?.toLocaleLowerCase())"
                    :alt="`logo ${bot.system?.toLocaleLowerCase()}`"
                    class="card-img-top p-4 img-thumbnail bg-white"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
