<script setup>
import { computed, ref } from "vue";

import CardComponent from "@/components/card/CardComponent.vue";
import { useWindowWidth } from "@/hooks/useWindowWidth.js";
import RobotIcon from "@/components/icons/RobotIcon.vue";
import { useServicesStore } from "@/stores/services.js";

const windowWidth = useWindowWidth();
const servicesStore = useServicesStore();

const showAll = ref(false);

const displayedServices = computed(() => {
    return showAll.value
        ? servicesStore.servicesList
        : servicesStore.servicesList.slice(0, 4);
});

const toggleShowAll = () => {
    showAll.value = !showAll.value;
};
</script>

<template>
    <section
        class="services page-container"
        id="services"
        v-if="!servicesStore.isLoading && servicesStore.servicesList.length > 0"
    >
        <h1>Услуги и тарифы</h1>
        <div class="services-container">
            <CardComponent
                class="service"
                v-for="service in displayedServices"
                :key="service.id"
            >
                <div class="service-icon">
                    <RobotIcon />
                </div>
                <div class="service-info">
                    <h2>{{ service.title }}</h2>
                    <p class="text-1">{{ service.description }}</p>
                    <h2>{{ service.price }}</h2>
                </div>
            </CardComponent>
        </div>
        <p
            class="text-1 show-more"
            @click="toggleShowAll"
            v-if="servicesStore.servicesList.length > 4 && windowWidth > 500"
        >
            {{ showAll ? "Скрыть" : "Увидеть больше" }}
        </p>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";

.services {
    display: flex;
    flex-direction: column;
    gap: 50px;

    margin: 200px auto 0;

    @include variables.desktop {
        margin: 100px auto 0;
    }

    @include variables.mobile {
        margin: 150px auto 0;
    }
}

.services-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 500px) {
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
    }
}

.service {
    display: flex;
    gap: 30px;

    padding: 1.5rem 2rem;

    @include variables.desktop {
        min-height: 200px;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        flex-shrink: 0;
        width: 100%;
        min-width: 100%;
    }
}

.service-icon {
    min-width: 125px;
    min-height: 100px;

    @media (max-width: 500px) {
        align-self: center;
    }
}

.service-info {
    align-self: center;

    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 500px) {
        align-self: center;
        width: 100%;
    }
}

.show-more {
    width: fit-content;

    margin: 0 auto;

    text-decoration: underline;
    opacity: 0.8;

    transition: opacity 0.3s ease;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
}
</style>
