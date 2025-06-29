<script setup>
import { ref } from "vue";

import PortfolioComponent from "@/views/home-page/components/PortfolioComponent.vue";
import ServicesContainer from "@/views/home-page/components/ServicesContainer.vue";
import ApplicationButton from "@/views/home-page/components/ApplicationButton.vue";
import FeedbackSection from "@/views/home-page/components/FeedbackSection.vue";
import VideoContainer from "@/views/home-page/components/VideoContainer.vue";
import WorkProcess from "@/views/home-page/components/WorkProcess.vue";
import TeamSection from "@/views/home-page/components/TeamSection.vue";
import BlogSection from "@/views/home-page/components/BlogSection.vue";
import GradientBackground1 from "@/assets/images/background1.png";
import GradientBackground2 from "@/assets/images/background2.png";
import GradientBackground3 from "@/assets/images/background3.png";
import GradientBackground4 from "@/assets/images/background4.png";
import GradientBackground5 from "@/assets/images/background5.png";
import HelpCard from "@/views/home-page/components/HelpCard.vue";
import Header from "@/components/header/HeaderComponent.vue";
import Footer from "@/components/footer/FooterComponent.vue";
import Menu from "@/components/menu/MenuComponent.vue";

const isActiveMenu = ref(false);

const toggleMenu = () => {
  isActiveMenu.value = !isActiveMenu.value;
};
</script>

<template>
  <Menu v-if="isActiveMenu" :toggle-menu="toggleMenu" />
  <main v-else>
    <article
      :style="{ backgroundImage: `url(${GradientBackground1})` }"
      class="first-container"
    >
      <Header :toggle-menu="toggleMenu" />
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
    <article
      :style="{ backgroundImage: `url(${GradientBackground4})` }"
      class="fourth-container"
    >
      <FeedbackSection />
    </article>
    <article
      :style="{ backgroundImage: `url(${GradientBackground5})` }"
      class="fifth-container"
    >
      <BlogSection />
    </article>
    <Footer />
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";

article {
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.second-container {
  padding-top: 200px;

  @include variables.tablet {
    padding-top: 150px;
  }
}

.third-container {
  padding-top: 330px;

  @include variables.tablet {
    padding-top: 150px;
  }
}

.fourth-container {
  padding-top: 145px;
  padding-bottom: 240px;

  @include variables.tablet {
    padding-top: 150px;
    padding-bottom: 160px;
  }
}

.fifth-container {
  padding-top: 60px;
  padding-bottom: 240px;

  @include variables.tablet {
    padding-top: 40px;
    padding-bottom: 150px;
  }
}
</style>
