<script setup>
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import RutubeIcon from "@/components/icons/RutubeIcon.vue";
import TikTokIcon from "@/components/icons/TikTokIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import HabrIcon from "@/components/icons/HabrIcon.vue";
import VKIcon from "@/components/icons/VKIcon.vue";

const props = defineProps({
  toggleMenu: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <section class="menu">
    <header>
      <LogoIcon class="logo" />
      <CloseIcon class="close" @click="props.toggleMenu" />
    </header>
    <div class="links">
      <a href="#services" class="text-1" @click="toggleMenu">Услуги</a>
      <a href="#processes" class="text-1" @click="toggleMenu">Этапы работы</a>
      <a href="#portfolio" class="text-1" @click="toggleMenu">Портфолио</a>
      <a href="#team" class="text-1" @click="toggleMenu">Компетенции</a>
      <a href="#blog" class="text-1" @click="toggleMenu">Блог</a>
    </div>
    <div class="connect">
      <h1 class="number">+7 987 654 - 32 - 10</h1>
      <div class="social-networks">
        <TelegramIcon class="tg-icon" />
        <InstagramIcon class="inst-icon" />
        <VKIcon class="vk-icon" />
        <YoutubeIcon class="yt-icon" />
        <TikTokIcon class="tt-icon" />
        <HabrIcon class="habr-icon" />
        <RutubeIcon class="rutube-icon" />
      </div>
      <h1 class="mail">gears.team@mail.ru</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 10;

  width: 100%;
  height: 100%;

  padding: 3rem 1.25rem;

  background-color: map.get(variables.$color, primary);

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
  }
}

.logo {
  width: 115px;
  height: 20px;
}

.close {
  width: 30px;
  height: 20px;

  cursor: pointer;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 20px;

  > a {
    text-decoration: none;
    text-align: center;
    cursor: pointer;

    font-size: 1.5rem;
  }
}

.connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.social-networks {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 20px;

  .tg-icon {
    max-width: 45px;
    max-height: 38px;

    width: 100%;

    cursor: pointer;
  }

  .inst-icon {
    max-width: 45px;
    max-height: 45px;

    width: 100%;

    cursor: pointer;
  }

  .vk-icon {
    max-width: 53px;
    max-height: 36px;

    width: 100%;

    cursor: pointer;
  }

  .yt-icon {
    max-width: 50px;
    max-height: 36px;

    width: 100%;

    cursor: pointer;
  }

  .tt-icon {
    max-width: 45px;
    max-height: 45px;

    width: 100%;

    cursor: pointer;
  }

  .habr-icon {
    max-width: 45px;
    max-height: 45px;

    width: 100%;

    cursor: pointer;
  }

  .rutube-icon {
    max-width: 45px;
    max-height: 45px;

    width: 100%;

    cursor: pointer;
  }
}

.number {
  font-size: 1.25rem;
}

.mail {
  font-size: 1.5rem;
  text-transform: lowercase;
}
</style>
