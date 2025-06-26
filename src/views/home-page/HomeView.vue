<script setup>
import PortfolioComponent from "@/views/home-page/components/PortfolioComponent.vue";
import ServicesContainer from "@/views/home-page/components/ServicesContainer.vue";
import ApplicationButton from "@/views/home-page/components/ApplicationButton.vue";
import VideoContainer from "@/views/home-page/components/VideoContainer.vue";
import WorkProcess from "@/views/home-page/components/WorkProcess.vue";
import TeamSection from "@/views/home-page/components/TeamSection.vue";
import GradientBackground1 from "@/assets/images/background1.png";
import GradientBackground2 from "@/assets/images/background2.png";
import GradientBackground3 from "@/assets/images/background3.png";
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
    <PortfolioComponent />
  </article>
  <article
    :style="{ backgroundImage: `url(${GradientBackground3})` }"
    class="third-container"
  >
    <ApplicationButton />
    <TeamSection />
  </article>
</template>

<style scoped lang="scss">
article {
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.second-container {
  padding-top: 200px;
}

.third-container {
  padding-top: 330px;
}
</style>
