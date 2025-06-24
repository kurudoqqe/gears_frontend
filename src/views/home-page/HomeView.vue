<script setup>
import GradientBackground1 from "@/assets/images/background1.png";
import Header from "@/components/header/HeaderComponent.vue";
</script>

<template>
  <section
    class="first-container"
    :style="{ backgroundImage: `url(${GradientBackground1})` }"
  >
    <Header />
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.first-container {
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
