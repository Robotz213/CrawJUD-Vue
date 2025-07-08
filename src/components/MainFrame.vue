<script setup lang="ts">
import styled from "@vue-styled-components/core";
import FooterView from "./FooterView.vue";
import NavbarView from "./NavbarView.vue";
import OffcanvasView from "./OffcanvasView.vue";

const StyledFrame = styled.div`
  position: fixed;
  top: 56px;
  overflow-y: scroll;
  max-height: calc(100dvh - 129px);
  width: 100%;
`;
</script>

<template>
  <div>
    <NavbarView />
    <OffcanvasView />
    <StyledFrame class="container-fluid p-4">
      <slot></slot>
    </StyledFrame>
    <FooterView />
  </div>
</template>
