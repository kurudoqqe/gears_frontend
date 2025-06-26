<script setup>
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import TikTokIcon from "@/components/icons/TikTokIcon.vue";
import RutubeIcon from "@/components/icons/RutubeIcon.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import HabrIcon from "@/components/icons/HabrIcon.vue";
import VKIcon from "@/components/icons/VKIcon.vue";
</script>

<template>
  <footer class="footer">
    <section class="page-container">
      <div class="first-container">
        <LogoIcon class="logo" />
        <p class="text-1">По вопросам сотрудничества пишите на почту</p>
        <h1>gears.team@mail.ru</h1>
        <div class="footer-icons">
          <TelegramIcon class="tg-icon" />
          <InstagramIcon class="inst-icon" />
          <VKIcon class="vk-icon" />
          <YoutubeIcon class="yt-icon" />
          <TikTokIcon class="tt-icon" />
          <HabrIcon class="habr-icon" />
          <RutubeIcon class="rutube-icon" />
        </div>
      </div>
      <div class="second-container">
        <div class="footer-links">
          <a href="#" class="text-1">Услуги</a>
          <a href="#" class="text-1">Этапы работы</a>
          <a href="#" class="text-1">Портфолио</a>
          <a href="#" class="text-1">Компетенции</a>
          <a href="#" class="text-1">Блог</a>
        </div>
        <h1>+7 987 654 - 32 - 10</h1>
        <a href="#" class="text-1">Политика конфиденциальности</a>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.footer {
  background-color: map.get(variables.$color, primary);
}

.page-container {
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2.25rem 0;
}

.first-container {
  display: flex;
  flex-direction: column;

  .logo {
    width: 495px;
    height: 105px;
  }

  > h1 {
    text-transform: lowercase;
  }

  > p {
    margin-top: 70px;
    margin-bottom: 10px;
  }
}

.second-container {
  display: flex;
  flex-direction: column;
  align-items: end;

  > h1 {
    margin-top: 20px;
    margin-bottom: 30px;
  }
}

.footer-icons {
  display: flex;
  align-items: center;
  gap: 30px;

  margin-top: 30px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 15px;

  > a {
    width: fit-content;

    padding: 0.25rem 1.25rem;

    text-decoration: none;

    border-radius: 20px;
    transition:
      background-color,
      box-shadow,
      200ms ease-in-out;

    &:hover {
      background-color: rgba(map.get(variables.$color, white), 0.1);
      box-shadow: 0 0 7px 0 map.get(variables.$color, white);
    }
  }
}

.tg-icon {
  max-width: 45px;
  max-height: 38px;

  width: 100%;

  cursor: pointer;
}

.inst {
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
</style>
