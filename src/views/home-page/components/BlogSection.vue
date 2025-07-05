<script setup>
import { useWindowWidth } from "@/hooks/useWindowWidth.js";
import SecondVideo from "@/assets/videos/blog2.MOV";
import FirstVideo from "@/assets/videos/blog1.mov";
import ThirdVideo from "@/assets/videos/blog3.mov";

const windowWidth = useWindowWidth();
</script>

<template>
  <section class="blog page-container" id="blog">
    <h1>Блог</h1>
    <div class="blog-content">
      <div class="blog-video">
        <video controls :src="ThirdVideo" />
        <p class="text-2">Узнаем у людей на улице, кто из них в ИТ</p>
      </div>
      <div class="blog-video">
        <video controls :src="FirstVideo" />
        <p class="text-2">Подкаст “Как стартануть в IT в 2025”</p>
      </div>
      <div class="blog-video" v-if="windowWidth > 750">
        <video controls :src="SecondVideo" />
        <p class="text-2">Наш курс по разработке Telegram-ботов</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.blog {
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin: 0 auto;
}

.blog-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @include variables.desktop {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
}

.blog-video {
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 280px;

  > video {
    border: 1px solid map.get(variables.$color, white);

    height: 280px;
  }

  @include variables.desktop {
    margin: 0 auto;
  }

  @media (max-width: 650px) {
    width: 350px;
  }
}
</style>
