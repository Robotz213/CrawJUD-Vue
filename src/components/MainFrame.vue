<script setup lang="ts">
import styled from "@vue-styled-components/core";
import NavbarView from "./NavbarView.vue";
import OffcanvasView from "./OffcanvasView.vue";

const StyledFrame = styled.div`
  position: fixed;
  top: 85px;
  left: 50px;
`;
</script>

<template>
  <NavbarView />
  <OffcanvasView />
  <StyledFrame>
    <slot></slot>
  </StyledFrame>
</template>
