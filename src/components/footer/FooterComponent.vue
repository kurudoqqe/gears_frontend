<script setup>
import DesktopFooter from "@/components/footer/DesktopFooter.vue";
import MobileFooter from "@/components/footer/MobileFooter.vue";
import { useWindowWidth } from "@/hooks/useWindowWidth.js";

const windowWidth = useWindowWidth();
</script>

<template>
  <DesktopFooter v-if="windowWidth > 1000" />
  <MobileFooter v-else />
</template>

<style scoped lang="scss"></style>
