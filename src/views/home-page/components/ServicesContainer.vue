<script setup>
import { onMounted, computed, ref } from "vue";

import CardComponent from "@/components/card/CardComponent.vue";
import RobotIcon from "@/components/icons/RobotIcon.vue";
import { services } from "@/mocks/services.mock.js";

const showAll = ref(false);
const servicesList = ref([]);

const displayedServices = computed(() => {
  return showAll.value ? servicesList.value : servicesList.value.slice(0, 4);
});

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

onMounted(async () => {
  // await getServices()
  //   .then((res) => (servicesList.value = res))
  //   .catch((err) => console.log(err));
  servicesList.value = services;
});
</script>

<template>
  <section
    class="services page-container"
    id="services"
    v-if="servicesList.length > 0"
  >
    <h1>Услуги и тарифы</h1>
    <div class="services-container">
      <CardComponent
        class="service"
        v-for="(service, index) in displayedServices"
        :key="index"
      >
        <div class="service-icon">
          <RobotIcon />
        </div>
        <div class="service-info">
          <h2>{{ service.title }}</h2>
          <p class="text-1">{{ service.content }}</p>
          <h2>{{ service.price }}</h2>
        </div>
      </CardComponent>
    </div>
    <p
      class="text-1 show-more"
      @click="toggleShowAll"
      v-if="servicesList.length > 4"
    >
      {{ showAll ? "Скрыть" : "Увидеть больше" }}
    </p>
  </section>
</template>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin: 200px auto 0;
}

.services-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service {
  display: flex;
  gap: 30px;

  padding: 1.5rem 2rem;
}

.service-icon {
  min-width: 125px;
  min-height: 100px;
}

.service-info {
  align-self: center;

  display: flex;
  flex-direction: column;
  gap: 10px;
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
