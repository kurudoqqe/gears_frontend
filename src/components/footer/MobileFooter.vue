<script setup>
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import TikTokIcon from "@/components/icons/TikTokIcon.vue";
import RutubeIcon from "@/components/icons/RutubeIcon.vue";
import HabrIcon from "@/components/icons/HabrIcon.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import VKIcon from "@/components/icons/VKIcon.vue";

const goToLink = (url) => {
  window.open(url);
};
</script>

<template>
  <footer class="footer">
    <section class="page-container">
      <div class="first-container">
        <LogoIcon class="logo" />
        <p class="bold text-1">
          <a href="tel:+79876543210">+7 987 654 - 32 - 10</a>
        </p>
        <p class="text-1">По вопросам сотрудничества пишите на почту</p>
        <p class="bold text-1">
          <a href="mailto:gears.team@mail.ru">gears.team@mail.ru</a>
        </p>
      </div>
      <div class="second-container">
        <div class="footer-icons">
          <TelegramIcon
            class="tg-icon"
            @click="() => goToLink('https://t.me/by_gears')"
          />
          <InstagramIcon
            class="inst-icon"
            @click="
              () =>
                goToLink(
                  ' https://www.instagram.com/gears_programming?igsh=MWxyeW1iZnVrY2Exbw',
                )
            "
          />
          <VKIcon
            class="vk-icon"
            @click="() => goToLink('https://vk.com/gears.official')"
          />
          <YoutubeIcon
            class="yt-icon"
            @click="
              () =>
                goToLink(
                  'https://youtube.com/@gears.official?si=GRKvgnahQT0WdmLN',
                )
            "
          />
          <TikTokIcon
            class="tt-icon"
            @click="
              () =>
                goToLink(
                  'https://www.tiktok.com/@company.gears?_t=ZS-8xHtnaJER2W&_r=1',
                )
            "
          />
          <HabrIcon
            class="habr-icon"
            @click="() => goToLink('https://habr.com/ru/settings/others/')"
          />
          <RutubeIcon
            class="rutube-icon"
            @click="() => goToLink('https://rutube.ru/channel/56314948/')"
          />
        </div>
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
  flex-direction: column;
  align-items: center;
  gap: 60px;

  margin: 0 auto;
  padding: 2.25rem 0;
}

.first-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .logo {
    width: 345px;
    height: 75px;
  }

  .bold {
    font-family: "Dela Gothic One", sans-serif;

    > a {
      text-decoration: none;
    }
  }
}

.second-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.footer-icons {
  display: flex;
  align-items: center;
  gap: 15px;
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
