import "@/assets/js/color-modes.js";
import "@/assets/scss/main.css";
import "@/controllers/axios";
import "@/controllers/socketio";
import { manager } from "@/controllers/socketio";
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
export const socketBots = manager.socket("/bots");
export const mainSocket = manager.socket("/main");
export const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(createBootstrap()); // Important
app.mount("#app");

router.afterEach((to) => {
  if (to.name !== "login") {
    setTimeout(() => {
      mainSocket.connect();
      socketBots.connect();
    }, 500);
  }
});

export function disconnectSocket() {
  mainSocket.disconnect();
  socketBots.disconnect();
}
