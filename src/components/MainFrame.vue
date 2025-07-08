<script setup lang="ts">
import styled from "@vue-styled-components/core";
import NavbarView from "./NavbarView.vue";
import OffcanvasView from "./OffcanvasView.vue";

const StyledFrame = styled.div`
  position: fixed;
  top: 56px;
  display: flex;
`;
</script>

<template>
  <NavbarView />
  <OffcanvasView />
  <StyledFrame class="container-fluid">
    <slot></slot>
  </StyledFrame>
</template>
