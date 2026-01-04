<script setup>
import { onMounted, ref } from "vue";

import PortfolioComponent from "@/views/home-page/components/PortfolioComponent.vue";
import MobileHeader from "@/views/home-page/components/HeaderCard/MobileHeader.vue";
import ServicesContainer from "@/views/home-page/components/ServicesContainer.vue";
import ApplicationButton from "@/views/home-page/components/ApplicationButton.vue";
import HeaderCard from "@/views/home-page/components/HeaderCard/HeaderCard.vue";
import FeedbackSection from "@/views/home-page/components/FeedbackSection.vue";
import WorkProcess from "@/views/home-page/components/WorkProcess.vue";
import TeamSection from "@/views/home-page/components/TeamSection.vue";
import GradientBackground1 from "@/assets/images/background1.png";
import GradientBackground2 from "@/assets/images/background2.png";
import GradientBackground3 from "@/assets/images/background3.png";
import GradientBackground4 from "@/assets/images/background4.png";
import HelpCard from "@/views/home-page/components/HelpCard.vue";
import Header from "@/components/header/HeaderComponent.vue";
import Footer from "@/components/footer/FooterComponent.vue";
import { useWindowWidth } from "@/hooks/useWindowWidth.js";
import { usePortfolioStore } from "@/stores/portfolio.js";
import { useServicesStore } from "@/stores/services.js";
import Menu from "@/components/menu/MenuComponent.vue";
import { getPortfolio } from "@/api/portfolio.js";
import { useTeamStore } from "@/stores/team.js";
import { getServices } from "@/api/services.js";
import { getTeam } from "@/api/team.js";

const isActiveMenu = ref(false);
const windowWidth = useWindowWidth();

const servicesStore = useServicesStore();
const portfolioStore = usePortfolioStore();
const teamStore = useTeamStore();

const toggleMenu = () => {
    isActiveMenu.value = !isActiveMenu.value;
};

onMounted(async () => {
    try {
        // Загружаем все данные параллельно
        await Promise.all([
            (async () => {
                try {
                    servicesStore.isLoading = true;
                    servicesStore.error = null;
                    const response = await getServices();
                    servicesStore.servicesList = response.data.services;
                } catch (err) {
                    console.error("Ошибка при загрузке услуг:", err);
                    servicesStore.error = err;
                } finally {
                    servicesStore.isLoading = false;
                }
            })(),
            (async () => {
                try {
                    portfolioStore.isLoading = true;
                    portfolioStore.error = null;
                    const response = await getPortfolio();
                    portfolioStore.portfolioList = response.data.projects;
                } catch (err) {
                    console.error("Ошибка при загрузке портфолио:", err);
                    portfolioStore.error = err;
                } finally {
                    portfolioStore.isLoading = false;
                }
            })(),
            (async () => {
                try {
                    teamStore.isLoading = true;
                    teamStore.error = null;
                    const response = await getTeam();
                    teamStore.teamMembers = response.data.teams;
                } catch (err) {
                    console.error("Ошибка при загрузке команды:", err);
                    teamStore.error = err;
                } finally {
                    teamStore.isLoading = false;
                }
            })(),
        ]);
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
});
</script>

<template>
    <Menu v-if="isActiveMenu" :toggle-menu="toggleMenu" />
    <main v-else>
        <article
            :style="{ backgroundImage: `url(${GradientBackground1})` }"
            class="first-container"
        >
            <Header :toggle-menu="toggleMenu" />
            <HeaderCard v-if="windowWidth > 1300" />
            <MobileHeader v-else />
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
        <Footer />
    </main>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";

article {
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.second-container {
    padding-top: 200px;

    @include variables.desktop {
        padding-top: 125px;
    }

    @include variables.tablet {
        padding-top: 150px;
    }
}

.third-container {
    padding-top: 330px;

    @include variables.desktop {
        padding-top: 150px;
    }

    @include variables.tablet {
        padding-top: 150px;
    }
}

.fourth-container {
    padding-top: 170px;
    padding-bottom: 240px;

    @include variables.desktop {
        padding-bottom: 125px;
    }

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

    @include variables.mobile {
        padding-top: 0;
    }
}
</style>
