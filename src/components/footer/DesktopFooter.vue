<script setup>
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import TikTokIcon from "@/components/icons/TikTokIcon.vue";
import RutubeIcon from "@/components/icons/RutubeIcon.vue";
import HabrIcon from "@/components/icons/HabrIcon.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import VKIcon from "@/components/icons/VKIcon.vue";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const goToLink = (url) => {
  window.open(url);
};
</script>

<template>
  <footer class="footer">
    <section class="page-container">
      <div class="first-container">
        <LogoIcon class="logo" @click="scrollToTop" />
        <p class="text-1">По вопросам сотрудничества пишите на почту</p>
        <h1><a href="mailto:gears.team@mail.ru">gears.team@mail.ru</a></h1>
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
      </div>
      <div class="second-container">
        <div class="footer-links">
          <a href="#services" class="text-1">Услуги</a>
          <a href="#processes" class="text-1">Этапы работы</a>
          <a href="#portfolio" class="text-1">Портфолио</a>
          <a href="#team" class="text-1">Компетенции</a>
          <a href="#blog" class="text-1">Блог</a>
        </div>
        <h1><a href="tel:+79876543210">+7 987 654 - 32 - 10</a></h1>
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

    cursor: pointer;
  }

  > h1 {
    text-transform: lowercase;

    > a {
      text-decoration: none;
    }
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

    > a {
      text-decoration: none;
    }
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
