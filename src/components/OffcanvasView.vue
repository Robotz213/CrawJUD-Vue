<script setup lang="ts">
import { api } from "@/controllers/axios";
import messageStore from "@/stores/message";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import MaterialSymbolsChecklistRtlRounded from "~icons/material-symbols/checklist-rtl-rounded?width=24px&height=24px";
import MaterialSymbolsTableOutline from "~icons/material-symbols/table-outline?width=24px&height=24px";
import RiRobot2Line from "~icons/ri/robot-2-line?width=24px&height=24px";
import RiSpeedUpFill from "~icons/ri/speed-up-fill?width=24px&height=24px";
const router = useRouter();

async function handleLogout(e: Event) {
  e.preventDefault();

  try {
    const resp = await api.post("/logout");

    if (resp.data.message || resp.data.msg) {
      const { message } = storeToRefs(messageStore());
      message.value = resp.data.message || resp.data.msg;
    }
  } catch {
    //
  }
  router.push({ name: "login" });
}
</script>

<template>
  <div
    class="offcanvas offcanvas-start offcanvas-sm"
    tabindex="-1"
    id="offCanvasCrawJUD"
    aria-labelledby="offCanvasCrawJUDLabel"
  >
    <div
      class="d-flex flex-column gap-0 pt-3 pb-3 bg-body-tertiary text-body-tertiary"
      style="width: 225px; min-height: 100%"
    >
      <a
        href="#"
        data-bs-toggle="offcanvas"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span class="ms-3 me-2">
          <img src="/src/assets/img/crawjud.ico" width="40" alt="Logo Sistema" />
        </span>
        <span class="fs-4">CrawJUD</span>
      </a>
      <hr />
      <div class="menu-heading">Core</div>
      <ul class="nav d-flex nav-pills flex-column gap-0 mb-auto">
        <li class="nav-item">
          <RouterLink
            :to="{ name: 'dashboard' }"
            class="nav-link"
            aria-current="page"
            active-class="active"
          >
            <div class="nav-link-icon">
              <RiSpeedUpFill />
            </div>
            <span class="text"> Dashboard </span>
          </RouterLink>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <div class="nav-link-icon">
              <MaterialSymbolsTableOutline />
            </div>
            <span class="text"> Execuções </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <div class="nav-link-icon">
              <MaterialSymbolsChecklistRtlRounded />
            </div>
            <span class="text"> Tarefas Agendadas </span>
          </a>
        </li>
        <div class="menu-heading">Interface</div>
        <li class="nav-item">
          <RouterLink :to="{ name: 'bots' }" class="nav-link" active-class="active">
            <div class="nav-link-icon">
              <RiRobot2Line />
            </div>
            <span class="text"> Robôs </span>
          </RouterLink>
          <a href="#"> </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown ps-3">
        <a
          href="#"
          class="d-flex align-items-center text-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a data-bs-toggle="offcanvas" class="dropdown-item" @click="handleLogout">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.menu-heading {
  padding: 1.4rem 1rem 0.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(46, 46, 46, 0.726);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.514);
  }
}

.nav-link-icon {
  font-size: 0.9rem;
  margin-right: 0.5rem;
}
.nav-link {
  font-size: 0.9rem;
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom: 0.75rem;
  color: #000000e1;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.795);
  }
}

.text {
  font-weight: 500;
}
</style>
