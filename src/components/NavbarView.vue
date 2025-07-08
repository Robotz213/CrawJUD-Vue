<script setup lang="ts">
import logoCrawjud from "@/assets/img/crawjud.png";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-bottom fixed-top">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        data-bs-toggle="offcanvas"
        href="#offCanvasCrawJUD"
        role="button"
        aria-controls="offCanvasCrawJUD"
      >
        Menu
      </a>
      <div class="me-auto ms-auto d-flex gap-2">
        <img :src="logoCrawjud" alt="Logo CrawJUD" height="35" />
        <span class="fs-4">CrawJUD</span>
      </div>
    </div>
  </nav>
</template>
