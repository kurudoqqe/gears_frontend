<script setup>
import Card from "@/components/card/CardComponent.vue";
</script>

<template>
  <section class="portfolio page-container">
    <h1>Портфолио</h1>
    <Card class="card">
      <video controls />
      <div class="project">
        <h2>Telegram-бот "HR Helper"</h2>
        <div class="description">
          <p class="text-1">
            <b>Цель:</b> Автоматизировать рутинные HR-процессы и улучшить
            взаимодействие с сотрудниками через Telegram
          </p>
          <p class="text-1">
            <b>Технологии:</b> Python (Aiogram), PostgreSQL, API-интеграции
          </p>
          <p class="text-1">
            <b>Функции:</b> Бот принимает заявки на отпуск и больничные, выдаёт
            справки (2-НДФЛ, о стаже),...
          </p>
        </div>
      </div>
    </Card>
    <Card class="card">
      <video controls />
      <div class="project">
        <h2>Telegram-бот "HR Helper"</h2>
        <div class="description">
          <p class="text-1">
            <b>Цель:</b> Автоматизировать рутинные HR-процессы и улучшить
            взаимодействие с сотрудниками через Telegram
          </p>
          <p class="text-1">
            <b>Технологии:</b> Python (Aiogram), PostgreSQL, API-интеграции
          </p>
          <p class="text-1">
            <b>Функции:</b> Бот принимает заявки на отпуск и больничные, выдаёт
            справки (2-НДФЛ, о стаже),...
          </p>
        </div>
      </div>
    </Card>
    <p class="more text-1">Увидеть больше</p>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.portfolio {
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 190px auto 0;

  > h1 {
    margin-bottom: 20px;
  }
}

.card {
  display: flex;
  gap: 20px;
  flex-direction: row-reverse;

  padding: 1.25rem;

  > video {
    border: 2px solid map.get(variables.$color, white);

    width: 100%;
  }

  &:nth-child(2n) {
    flex-direction: row;
  }
}

.project {
  display: flex;
  flex-direction: column;
  gap: 35px;

  width: 100%;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  padding: 0 0.75rem;

  b {
    font-weight: 600;
  }
}

.more {
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
}
</style>
