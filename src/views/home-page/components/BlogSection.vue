<script setup></script>

<template>
  <section class="blog page-container">
    <h1>Блог</h1>
    <div class="blog-content">
      <div class="blog-video">
        <video controls />
        <p class="text-2">Подкаст “Как стать Python синьором в 19”</p>
      </div>
      <div class="blog-video">
        <video controls />
        <p class="text-2">Узнаем у людей на улице, кто из них в ИТ</p>
      </div>
      <div class="blog-video">
        <video controls />
        <p class="text-2">Подкаст “Как стать Python синьором в 19”</p>
      </div>
      <div class="blog-video">
        <video controls />
        <p class="text-2">Узнаем у людей на улице, кто из них в ИТ</p>
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
  gap: 20px;
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
}
</style>
