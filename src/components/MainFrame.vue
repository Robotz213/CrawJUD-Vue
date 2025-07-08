<script setup lang="ts">
import styled from "@vue-styled-components/core";
import { computed } from "vue";
import { useRoute } from "vue-router";
import FooterView from "./FooterView.vue";
import NavbarView from "./NavbarView.vue";
import OffcanvasView from "./OffcanvasView.vue";

const route = useRoute();
const StyledFrame = styled.div`
  position: fixed;
  top: 56px;
  overflow-y: scroll;
  height: 100%;
  max-height: calc(100dvh - 129px);
  width: 100%;
`;

const computedClass = computed(() => {
  return route.name === "login" ? "d-flex" : "container-fluid d-grid align-items-center mt-auto";
});
</script>

<template>
  <div>
    <NavbarView />
    <OffcanvasView />
    <StyledFrame :class="computedClass">
      <slot></slot>
    </StyledFrame>
    <FooterView />
  </div>
</template>
