<script setup>
import Button from "@/components/button/ButtonComponent.vue";
import { jumpToSection } from "@/utils.js";
</script>

<template>
  <section class="page-container">
    <Button class="application-button" @click="jumpToSection('feedback')"
      >Заполнить заявку</Button
    >
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";

.page-container {
  margin: 0 auto;
}
.application-button {
  width: 100%;
  height: 300px;

  font-family: "Dela Gothic One", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;

  @include variables.tablet {
    height: 250px;
  }

  @include variables.mobile {
    height: 200px;
  }
}
</style>
