<script setup>
import { onUnmounted, onMounted, computed, ref } from "vue";

import CardComponent from "@/components/card/CardComponent.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

const cardsData = [
  {
    content:
      "Сайты, админки, личные кабинеты (Django, DRF, FastAPl, Vue/React)",
    price: "от 49.990 руб.",
    title: "Веб-разработка",
  },
  {
    content: "UI/UX, брендирование, лендинги, презентации",
    price: "от 19.990 руб.",
    title: "Дизайн",
  },
  {
    content: "Архитектура, сборка, DevOps (Docker, CI/CD)",
    title: "Микросервисы, MVP, Saas, CRM, LMS системы",
    price: "от 99.900 руб.",
  },
  {
    title: "Одностраничный сайт",
    price: "от 6.490 руб.",
    content: "",
  },
  {
    content:
      "От простых до интегрированных с CRM, оплатой, воронками, аналитикой",
    title: "Telegram-боты/miniapp",
    price: "от 9.900 руб.",
  },
  {
    content: "Скрипты, интеграции с АРl, парсеры, автозадачи",
    price: "от 29.900 руб.",
    title: "Автоматизация",
  },

  {
    price: "Цена по договоренности",
    title: "Доработка проектов",
    content: "",
  },
  {
    price: "Цена по договоренности",
    title: "Сопровождение проектов",
    content: "",
  },
  {
    price: "Цена по договоренности",
    title: "Продвижение продуктов",
    content: "",
  },
  {
    price: "от 1.500 руб.",
    title: "Монтаж видео",
    content: "",
  },
  {
    price: "от 3.500 руб./час",
    title: "Съёмка видео",
    content: "",
  },
  {
    title: "Продюсерские услуги под ключ",
    price: "Цена по договоренности",
    content: "",
  },
];

const cardsPerPage = ref(3);
const currentPage = ref(0);

const totalPages = computed(() => {
  return Math.ceil(cardsData.length / cardsPerPage.value);
});

const visibleCards = computed(() => {
  const start = currentPage.value * cardsPerPage.value;
  return cardsData.slice(start, start + cardsPerPage.value);
});

const toNextPage = () => {
  currentPage.value = (currentPage.value + 1) % totalPages.value;
};

const toPrevPage = () => {
  currentPage.value =
    (currentPage.value - 1 + totalPages.value) % totalPages.value;
};

const handleResize = () => {
  cardsPerPage.value = window.innerWidth < 768 ? 1 : 3;

  if (currentPage.value >= totalPages.value) {
    currentPage.value = Math.max(0, totalPages.value - 1);
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  handleResize();
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <section class="services page-container" id="services">
    <h1>Услуги и тарифы</h1>
    <div class="card-container">
      <ArrowIcon view="left" class="arrow" @click="toPrevPage" />
      <div class="cards-wrapper">
        <CardComponent
          v-for="(card, index) in visibleCards"
          :key="index"
          class="card"
        >
          <h2>{{ card.title }}</h2>
          <p class="text-1">
            {{ card.content }}
          </p>
          <h2 class="card-price">{{ card.price }}</h2>
        </CardComponent>
      </div>
      <ArrowIcon view="right" class="arrow" @click="toNextPage" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";

.services {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;

  @include variables.mobile {
    gap: 40px;
  }
}

.card-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cards-wrapper {
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: center;

  min-height: 360px;
}

.arrow {
  width: 100%;
  height: fit-content;
  max-width: 32px;
  min-height: 50px;

  user-select: none;
  cursor: pointer;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;

  padding: 2.25rem;

  word-break: break-word;

  .card-price {
    align-self: end;

    margin-top: auto;
  }
}
</style>
