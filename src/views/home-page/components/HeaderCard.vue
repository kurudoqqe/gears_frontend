<script setup>
import TypewriterComponent from "@/components/TypewriterComponent.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import HeaderBackground from "@/assets/images/header-background.png";
import IphoneImg from "@/assets/images/Iphone.png";
import MacBook from "@/assets/images/MacBook.png";
import { jumpToSection } from "@/utils.js";
</script>

<template>
  <section
    class="header-card page-container"
    :style="{ background: `url(${HeaderBackground})`, backgroundSize: 'cover' }"
  >
    <TypewriterComponent
      title="Сайты, веб-приложения, боты — под ключ"
      class="card-title"
    />
    <div class="buttons-container">
      <ButtonComponent class="button text-1" @click="jumpToSection('feedback')"
        >Заполнить заявку</ButtonComponent
      >
      <ButtonComponent class="button text-1" @click="jumpToSection('portfolio')"
        >Посмотреть наши работы</ButtonComponent
      >
    </div>
    <div class="card-description">
      <span class="text-1">Ваш телеграм бот от 3 дней</span>
      <span class="text-1">Сайт для бизнеса от 30 000 руб</span>
    </div>
    <img
      :src="MacBook"
      alt="MacBook image"
      class="macbook-img"
      @dragstart.prevent
    />
    <img
      :src="IphoneImg"
      alt="Iphone image"
      class="iphone-img"
      @dragstart.prevent
    />
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.header-card {
  display: flex;
  flex-direction: column;

  position: relative;

  height: 640px;
  width: 100%;

  margin: 30px auto 0;
  padding: 50px;

  overflow: hidden;
}

.card-title {
  min-height: 120px;
  margin-bottom: 55px;
}

.buttons-container {
  display: flex;
  gap: 20px;
}

.button {
  width: 340px;
  padding: 1.75rem 0;

  color: map.get(variables.$color, white);

  &:hover {
    color: map.get(variables.$color, black);
    font-weight: 700;
  }
}

.card-description {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: fit-content;

  margin-top: auto;

  > span.text-1 {
    font-family: Inter, sans-serif;
    text-transform: uppercase;
  }
}

.iphone-img {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 11;

  max-height: 450px;
  max-width: 260px;

  width: 100%;
  height: 100%;
}

.macbook-img {
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 40px;

  max-height: 325px;
  max-width: 650px;

  width: 100%;
  height: 100%;
}
</style>
