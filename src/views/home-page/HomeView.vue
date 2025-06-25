<script setup>
import ServicesContainer from "@/views/home-page/components/ServicesContainer.vue";
import VideoContainer from "@/views/home-page/components/VideoContainer.vue";
import GradientBackground1 from "@/assets/images/background1.png";
import Header from "@/components/header/HeaderComponent.vue";
</script>

<template>
  <article
    class="first-container"
    :style="{ backgroundImage: `url(${GradientBackground1})` }"
  >
    <Header />
    <VideoContainer />
    <ServicesContainer />
  </article>
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
