<script setup>
import { onUnmounted, onMounted, ref } from "vue";

import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import MaximTepinImage from "@/assets/images/Maxim Tepin.jpg";
import AlexandraImage from "@/assets/images/Alexandra.jpg";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import ViktoriaImage from "@/assets/images/Viktoria.jpg";
import VeronikaImage from "@/assets/images/Veronika.jpg";
import MaximkaImage from "@/assets/images/Maximka.jpg";
import HabrIcon from "@/components/icons/HabrIcon.vue";
import KetrinImage from "@/assets/images/Ketrin.jpg";
import VadimImage from "@/assets/images/Vadim.jpg";
import IvanImage from "@/assets/images/Ivan.jpg";
import AnnaImage from "@/assets/images/Anna.jpg";
import OlegImage from "@/assets/images/Oleg.jpg";

const teamContainer = ref(null);
const showLeftArrow = ref(false);
const showRightArrow = ref(false);
const currentActiveMember = ref(null);

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

const setActiveMember = (index) => {
  if (index === currentActiveMember.value) {
    currentActiveMember.value = null;
  } else {
    currentActiveMember.value = index;
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
        class="arrow left-arrow hover"
        :class="{ visible: showLeftArrow }"
        @click="scrollLeft"
      />
      <div class="team" ref="teamContainer">
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%), url(${IvanImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(1)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 1">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${MaximTepinImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(2)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 2">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${KetrinImage}) center/cover no-repeat`,
              backgroundPosition: 'center',
            }"
            @click="setActiveMember(3)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 3">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${ViktoriaImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(4)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 4">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${OlegImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(5)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 5">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${AnnaImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(6)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 6">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${VeronikaImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(7)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 7">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${AlexandraImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(8)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 8">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${VadimImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(9)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 9">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
        <div class="member-container">
          <div
            class="member"
            :style="{
              background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%),  url(${MaximkaImage}) center/cover no-repeat`,
            }"
            @click="setActiveMember(10)"
          >
            <div class="member-text">
              <h2>Иван Ткачёв</h2>
              <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
            </div>
          </div>
          <Transition name="slide">
            <div class="member-info" v-if="currentActiveMember === 10">
              <p class="text-2">
                Team Lead и Product Manager с опытом коммерческой разработки на
                Python (Django/FastAPI). Специализируюсь на создании и выведении
                на рынок сложных веб-сервисов и Telegram-решений: от
                проектирования архитектуры и управления командой до реализации и
                поддержки.
              </p>
              <p class="text-2">
                Разрабатывал и курировал проекты полного цикла: CRM/LMS системы,
                маркетплейсы, e-commerce платформы и мини-приложения. Обладаю
                глубокими знаниями в бэкенд-разработке и DevOps (Docker, nginx,
                CI/CD) для обеспечения надежности и масштабируемости продуктов.
              </p>
              <div class="icons-container">
                <TelegramIcon class="member-icon" />
                <HabrIcon class="member-icon" />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <ArrowIcon
        view="right"
        class="arrow right-arrow hover"
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

.member-container {
  display: flex;
  position: relative;
  height: 550px;

  @include variables.mobile {
    flex-direction: column;
    height: 1000px;
  }
}

.member {
  display: flex;
  flex-shrink: 0;
  gap: 10px;

  position: relative;
  z-index: 2;

  padding: 1.25rem;

  width: 370px;

  transition: transform 300ms;

  @include variables.mobile {
    height: 550px;
  }

  &:hover {
    transform: scale(1.075);

    .member-text {
      transform: translateY(-40%);
    }
  }

  .member-text {
    display: flex;
    flex-direction: column;
    align-self: end;
    gap: 10px;

    transition: transform 300ms;
  }
}

.member-info {
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 340px;

  padding: 2rem 1.25rem;

  background-color: map.get(variables.$color, primary);

  .icons-container {
    display: flex;
    gap: 20px;

    margin-top: auto;
  }
}

.member-icon {
  width: 30px;
  height: 30px;

  cursor: pointer;
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

.slide-enter-active,
.slide-leave-active {
  transition: all 300ms ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}
</style>
