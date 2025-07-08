import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      redirect: {
        name: "login",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),
    },
    {
      path: "/bots",
      name: "bots",
      component: () => import("@/views/bots/BotsView.vue"),
    },
    {
      path: "/bot/:bot_id/:bot_system/:bot_type",
      name: "bot_form",
      component: () => import("@/views/bots/forms/BotForm.vue"),
    },
  ],
});

export default router;
