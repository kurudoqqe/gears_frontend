<script setup>
import ServicesContainer from "@/views/home-page/components/ServicesContainer.vue";
import VideoContainer from "@/views/home-page/components/VideoContainer.vue";
import WorkProcess from "@/views/home-page/components/WorkProcess.vue";
import GradientBackground1 from "@/assets/images/background1.png";
import GradientBackground2 from "@/assets/images/background2.png";
import HelpCard from "@/views/home-page/components/HelpCard.vue";
import Header from "@/components/header/HeaderComponent.vue";
</script>

<template>
  <article
    :style="{ backgroundImage: `url(${GradientBackground1})` }"
    class="first-container"
  >
    <Header />
    <VideoContainer />
    <ServicesContainer />
  </article>
  <article
    :style="{ backgroundImage: `url(${GradientBackground2})` }"
    class="second-container"
  >
    <HelpCard />
    <WorkProcess />
  </article>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

article {
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.second-container {
  padding-top: 200px;
}
</style>
