<script setup lang="ts">
import styled from "@vue-styled-components/core";
import NavbarView from "./NavbarView.vue";

const StyledFrame = styled.div`
  position: fixed;
  top: 85px;
  left: 50px;
`;
</script>

<template>
  <NavbarView />
  <StyledFrame>
    <slot></slot>
  </StyledFrame>
</template>
