<script setup>
import { onMounted, computed, ref } from "vue";

import Card from "@/components/card/CardComponent.vue";
import { getPortfolio } from "@/api/portfolio.js";

const portfolioList = ref([]);
const showAll = ref(false);
const isLoading = ref(true);
const error = ref(null);

const displayedPortfolios = computed(() => {
    return showAll.value
        ? portfolioList.value
        : portfolioList.value.slice(0, 2);
});

const toggleShowAll = () => {
    showAll.value = !showAll.value;
};

onMounted(async () => {
    try {
        isLoading.value = true;
        const response = await getPortfolio();
        portfolioList.value = response.data.projects;
    } catch (err) {
        console.error("Ошибка при загрузке портфолио:", err);
        error.value = err;
    } finally {
        isLoading.value = false;
    }
});
</script>

<template>
    <section
        class="portfolio page-container"
        id="portfolio"
        v-if="!isLoading && portfolioList.length > 0"
    >
        <h1>Портфолио</h1>
        <Card
            class="card"
            v-for="portfolio in displayedPortfolios"
            :key="portfolio.id"
        >
            <img :src="portfolio.image_url" alt="" @dragstart.prevent />
            <div class="project">
                <h2>{{ portfolio.title }}</h2>
                <div class="description">
                    <p class="text-1" v-if="portfolio.description">
                        <b>Описание:</b> {{ portfolio.description }}
                    </p>
                    <p
                        class="text-1"
                        v-if="
                            portfolio.technologies &&
                            portfolio.technologies.length > 0
                        "
                    >
                        <b>Технологии:</b>
                        {{ portfolio.technologies.join(", ") }}
                    </p>
                </div>
            </div>
        </Card>
        <p
            class="more text-1"
            @click="toggleShowAll"
            v-if="portfolioList.length > 2"
        >
            {{ !showAll ? "Увидеть больше" : "Скрыть" }}
        </p>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";
@use "sass:map";

.portfolio {
    display: flex;
    flex-direction: column;
    gap: 30px;

    margin: 210px auto 0;

    > h1 {
        margin-bottom: 20px;
    }

    @include variables.tablet {
        gap: 20px;

        margin: 150px auto 0;
    }

    @include variables.mobile {
        margin: 50px auto 0;
    }
}

.card {
    display: flex;
    gap: 20px;
    flex-direction: row-reverse;

    overflow: hidden;

    padding: 1.25rem;

    > video,
    img {
        border: 2px solid map.get(variables.$color, white);

        width: 100%;
        height: 270px;

        @include variables.mobile {
            aspect-ratio: 320/270;
        }
    }

    &:nth-child(2n) {
        flex-direction: row;

        @include variables.tablet {
            flex-direction: column;
        }
    }
}

.project {
    display: flex;
    flex-direction: column;
    gap: 35px;

    width: 100%;

    @include variables.tablet {
        gap: 10px;
    }
}

.description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    > p.text-1 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
    }

    b {
        font-weight: 600;
    }

    @include variables.tablet {
        justify-content: normal;
        gap: 10px;
    }
}

.more {
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
}
</style>
