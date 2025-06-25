<script setup>
import GradientBackground from "@/assets/images/card-background.png";
import Button from "@/components/button/ButtonComponent.vue";
</script>

<template>
  <section
    class="help-card page-container"
    :style="{ background: `url(${GradientBackground})` }"
  >
    <h1>не знаете что выбрать?</h1>
    <Button class="help-button">
      <p class="text-1">Заполнить заявку</p>
    </Button>
    <p class="text-1">и мы вам подскажем</p>
  </section>
</template>

<style scoped lang="scss">
.help-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 570px;

  margin: 0 auto;
}

.help-button {
  margin-top: 20px;
  padding: 0.65rem 6.25rem;
}
</style>
