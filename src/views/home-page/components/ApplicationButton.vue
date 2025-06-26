<script setup>
import Button from "@/components/button/ButtonComponent.vue";

const jumpToFeedback = () => {
  const feedbackId = document.querySelector("#feedback");
  window.scrollTo(0, feedbackId.offsetTop - 125);
};
</script>

<template>
  <section class="page-container">
    <Button class="application-button" @click="jumpToFeedback"
      >Заполнить заявку</Button
    >
  </section>
</template>

<style scoped lang="scss">
.page-container {
  margin: 0 auto;
}
.application-button {
  width: 100%;
  height: 300px;

  font-family: "Dela Gothic One", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
}
</style>
