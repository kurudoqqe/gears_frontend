<script setup>
import { onUnmounted, onMounted, computed, ref } from "vue";

import CardComponent from "@/components/card/CardComponent.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

const cardsData = [
  {
    content: "asdasdasdasdasdasdasd.",
    price: "от 333 333 ₽",
    title: "qwe",
  },
  {
    content: "asdsjkadfajsajkfksd.",
    price: "от 666 ₽",
    title: "rty",
  },
  {
    content: "dfgkdnfgsdlkfgnlskdfgknlsdknlfgnkdsfgkndslknfg.",
    price: "от 99999999 ₽",
    title: "123",
  },
  {
    content: "ajsdalskdjgsdgksdhj.",
    price: "от 901 000 ₽",
    title: "zxc",
  },
  {
    content: "xvcxnjxvkjsfksndklfksldf.",
    price: "от 40 000 ₽",
    title: "vbn",
  },
  {
    content: "wqeorqwejrhlqwkerhjqwkhjerhwkqler.",
    price: "от 30 123 ₽",
    title: "098",
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
  <section class="services page-container">
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
.services {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
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

  word-break: break-all;

  .card-price {
    align-self: end;
  }
}
</style>
