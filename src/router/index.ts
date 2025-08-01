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
      component: () => import("@/views/botform/BotForm.vue"),
    },
    {
      path: "/credentials",
      name: "credentials",
      component: () => import("@/views/credentials/CredentialsView.vue"),
    },
    {
      path: "/credentials/new",
      name: "newCredential",
      component: () => import("@/views/credentials/form/CredentialsFormView.vue"),
    },
    {
      path: "/logs/exec/:pid",
      name: "logs_execution",
      component: () => import("@/views/logsbot/LogsView.vue"),
    },
  ],
});

export default router;
