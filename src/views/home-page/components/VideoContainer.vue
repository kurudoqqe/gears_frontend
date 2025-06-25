<script setup>
import Button from "@/components/button/ButtonComponent.vue";
</script>

<template>
  <section class="video page-container">
    <video controls />
    <Button class="video-button">Заполнить заявку</Button>
  </section>
</template>

<style scoped lang="scss">
.video {
  display: flex;
  flex-direction: column;

  margin: 30px auto 200px;
}

.video-button {
  margin-top: 20px;
  padding: 0.65rem;
}
</style>
