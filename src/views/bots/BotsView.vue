<script setup lang="ts">
import logoElaw from "@/assets/img/elaw.png";
import logoEsaj from "@/assets/img/esaj2.png";
import crawjud from "@/assets/img/figure_crawjud.png";
import logoProjudi from "@/assets/img/projudi.png";
import manager from "@/controllers/socketio";
import { computed, onBeforeMount, ref } from "vue";
import { RouterLink } from "vue-router";

interface BotRecord {
  system: string;
  state: string;
  type: string;
  classification: string;
  display_name: string;
  id: number;
  client: string;
  form_cfg: string;
  text: string;
}

const botList = ref<BotRecord[]>([]);
const io = manager.socket("/bots");

const query = ref("");
const filterBots = computed(() =>
  Array.from(botList.value).filter((item) =>
    item.display_name?.toLowerCase().includes(query.value.toLowerCase()),
  ),
);

onBeforeMount(() => {
  io.emit("bots_list", (botData: BotRecord[]) => {
    botList.value = botData;
  });
});

const imagesSrc: { [key: string]: string } = {
  projudi: logoProjudi,
  esaj: logoEsaj,
  elaw: logoElaw,
};

function getLogo(system: string) {
  return imagesSrc[system] || crawjud;
}
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h1 class="m-1">Robôs</h1>
      </div>
      <div class="card-body bg-warning bg-opacity-75">
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
              <div class="col-md-3 p-4" v-for="bot in filterBots" :key="bot.display_name">
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
                    <RouterLink
                      class="btn btn-success fw-semibold"
                      :to="{
                        name: 'bot_form',
                        params: {
                          bot_id: bot.id,
                          bot_system: bot.system.toLowerCase(),
                          bot_type: bot.type.toLowerCase(),
                        },
                      }"
                    >
                      Acessar Robô
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
