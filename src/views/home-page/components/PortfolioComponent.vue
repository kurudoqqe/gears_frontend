<script setup>
import CarAuctionPhoto from "@/assets/images/CarAuction.jpg";
import Card from "@/components/card/CardComponent.vue";
import EasyLmsPhoto from "@/assets/images/easylms.png";
</script>

<template>
  <section class="portfolio page-container" id="portfolio">
    <h1>Портфолио</h1>
    <Card class="card">
      <img :src="CarAuctionPhoto" alt="" @dragstart.prevent />
      <div class="project">
        <h2>Сервис для авторитейла</h2>
        <div class="description">
          <p class="text-1">
            <b>Цель:</b> Создать прозрачную экосистему для работы на рынке
            автомобилей с пробегом
          </p>
          <p class="text-1">
            <b>Технологии:</b> Python (Django), PostgreSQL, Docker, Celery,
            Vue.js, SASS/SCSS, Axios
          </p>
          <p class="text-1">
            <b>Функции:</b> Продажа авто | Покупка авто | Доставка из-за рубежа
            | Заявка на техническое обслуживание
          </p>
        </div>
        <!--        <p class="more text-1" v-if="windowWidth <= 500">Увидеть все</p>-->
      </div>
    </Card>
    <Card class="card">
      <img :src="EasyLmsPhoto" alt="" @dragstart.prevent />
      <div class="project">
        <h2>LMS система</h2>
        <div class="description">
          <p class="text-1">
            <b>Цель:</b> Создать образовательную платформу для корпоративного
            обучения
          </p>
          <p class="text-1">
            <b>Технологии:</b> Python (Django), Aiogram, PostgreSQL, Docker, S3,
            React, Axios, Zod
          </p>
          <p class="text-1">
            <b>Функции:</b> Создание курсов | Распространение | Продажа
          </p>
        </div>
        <!--        <p class="more text-1" v-if="windowWidth <= 500">Увидеть все</p>-->
      </div>
    </Card>
    <!--    <p class="more text-1">Увидеть больше</p>-->
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

  @include variables.mobile {
    gap: 20px;

    margin: 150px auto 0;
  }
}

.card {
  display: flex;
  gap: 20px;
  flex-direction: row-reverse;

  padding: 1.25rem;

  > video,
  img {
    border: 2px solid map.get(variables.$color, white);

    width: 100%;
    height: 270px;

    @include variables.mobile {
      aspect-ratio: 320/270;
    }
  }

  &:nth-child(2n) {
    flex-direction: row;

    @include variables.tablet {
      flex-direction: column;
    }
  }

  @include variables.tablet {
    flex-direction: column;
  }
}

.project {
  display: flex;
  flex-direction: column;
  gap: 35px;

  width: 100%;

  @include variables.tablet {
    gap: 10px;
  }
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

  @include variables.tablet {
    justify-content: normal;
    gap: 10px;
  }
}

.more {
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
}
</style>
