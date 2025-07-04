<script setup>
import { onUnmounted, onMounted, ref } from "vue";

import MaximTepinImage from "@/assets/images/Maxim Tepin.jpg";
import AlexandraImage from "@/assets/images/Alexandra.jpg";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import ViktoriaImage from "@/assets/images/Viktoria.jpg";
import VeronikaImage from "@/assets/images/Veronika.jpg";
import MaximkaImage from "@/assets/images/Maximka.jpg";
import KetrinImage from "@/assets/images/Ketrin.jpg";
import VadimImage from "@/assets/images/Vadim.jpg";
import IvanImage from "@/assets/images/Ivan.jpg";
import AnnaImage from "@/assets/images/Anna.jpg";
import OlegImage from "@/assets/images/Oleg.jpg";

const teamContainer = ref(null);
const showLeftArrow = ref(false);
const showRightArrow = ref(false);

const checkScroll = () => {
  if (!teamContainer.value) return;

  showLeftArrow.value = teamContainer.value.scrollLeft > 0;
  showRightArrow.value =
    teamContainer.value.scrollLeft <
    teamContainer.value.scrollWidth - teamContainer.value.clientWidth;
};

const scrollLeft = () => {
  if (teamContainer.value) {
    teamContainer.value.scrollBy({ behavior: "smooth", left: -300 });
  }
};

const scrollRight = () => {
  if (teamContainer.value) {
    teamContainer.value.scrollBy({ behavior: "smooth", left: 300 });
  }
};

onMounted(() => {
  if (teamContainer.value) {
    teamContainer.value.addEventListener("scroll", checkScroll);
    checkScroll();
  }
});

onUnmounted(() => {
  if (teamContainer.value) {
    teamContainer.value.removeEventListener("scroll", checkScroll);
  }
});
</script>

<template>
  <section class="team-section page-container" id="team">
    <h1>О команде</h1>
    <div class="team-wrapper">
      <ArrowIcon
        view="left"
        class="arrow left-arrow"
        :class="{ visible: showLeftArrow }"
        @click="scrollLeft"
      />
      <div class="team" ref="teamContainer">
        <div class="member">
          <img :src="IvanImage" alt="team-member" @dragstart.prevent />
          <h2>Иван Ткачёв</h2>
          <p class="text-1">
            Разработчик сервисов на Django / FastAPI и различных Telegram ботов
            / MiniApp
          </p>
        </div>
        <div class="member">
          <img :src="MaximTepinImage" alt="team-member" @dragstart.prevent />
          <h2>Максим Тепин</h2>
          <p class="text-1">
            Backend разработчик, Project Manager, Product Manager
          </p>
        </div>
        <div class="member">
          <img :src="KetrinImage" alt="team-member" @dragstart.prevent />
          <h2>Екатерина Крутова</h2>
          <p class="text-1">UI/UX дизайнер</p>
        </div>
        <div class="member">
          <img :src="ViktoriaImage" alt="team-member" @dragstart.prevent />
          <h2>Виктория Куленёнок</h2>
          <p class="text-1">Digital-Маркетолог:</p>
          <p class="text-1">
            Разработка комплексных стратегий продвижения, Анализ ЦА и рынка
          </p>
        </div>
        <div class="member">
          <img :src="OlegImage" alt="team-member" @dragstart.prevent />
          <h2>Олег Репин</h2>
          <p class="text-1">Frontend-разработка:</p>
          <p class="text-1">
            современные веб-решения, отвечающие потребностям пользователей и
            бизнеса
          </p>
        </div>
        <div class="member">
          <img :src="AnnaImage" alt="team-member" @dragstart.prevent />
          <h2>Анна Данилюк</h2>
          <p class="text-1">SMM специалист:</p>
          <p class="text-1">
            Производство контента: Посты, Stories, Reels, Визуал
          </p>
        </div>
        <div class="member">
          <img :src="VeronikaImage" alt="team-member" @dragstart.prevent />
          <h2>Вероника Попова</h2>
          <p class="text-1">Reels Мейкер / Видеограф:</p>
          <p class="text-1">
            Reels, цепляющие с первых секунд, Видеопортфолио, Динамичный монтаж
          </p>
        </div>
        <div class="member">
          <img :src="AlexandraImage" alt="team-member" @dragstart.prevent />
          <h2>Александра Поясок</h2>
          <p class="text-1">
            Дизайн и прототипирование: полный цикл проектирования в Figma
          </p>
        </div>
        <div class="member">
          <img :src="VadimImage" alt="team-member" @dragstart.prevent />
          <h2>Вадим Киселёв</h2>
          <p class="text-1">Frontend разработчик:</p>
          <p class="text-1">
            Разработка SPA и SSR-приложений, Оптимизация производительности и
            SEO
          </p>
        </div>
        <div class="member">
          <img :src="MaximkaImage" alt="team-member" @dragstart.prevent />
          <h2>Максим Григорьев</h2>
          <p class="text-1">Backend Разработчик:</p>
          <p class="text-1">
            Разработка сервисов на FastAPI, Разработка Telegram ботов
          </p>
        </div>
      </div>
      <ArrowIcon
        view="right"
        class="arrow right-arrow"
        :class="{ visible: showRightArrow }"
        @click="scrollRight"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.team-section {
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin: 200px auto 0;

  position: relative;
}

.team-wrapper {
  position: relative;

  width: 100%;
}

.team {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;

  overflow-x: auto;
  overflow-y: hidden;

  scroll-behavior: smooth;
}

.member {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;

  width: 265px;

  > img {
    width: 100%;
    height: 415px;
    object-fit: cover;
  }
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  z-index: 10;

  width: 40px;
  height: 40px;

  opacity: 0;

  background-color: rgba(map.get(variables.$color, primary), 0.75);

  transition:
    opacity,
    background-color 200ms ease-in-out;

  &.left-arrow {
    left: 10px;
  }

  &.right-arrow {
    right: 10px;
  }

  &.visible {
    opacity: 1;

    cursor: pointer;
  }
}
</style>
