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
import { useTeamStore } from "@/stores/team.js";
import { useBlogStore } from "@/stores/blog.js";

const props = defineProps({
    toggleMenu: {
        type: Function,
        required: true,
    },
});

const teamStore = useTeamStore();
const blogStore = useBlogStore();

const goToLink = (url) => {
    window.open(url);
};
</script>

<template>
    <section class="menu">
        <header>
            <LogoIcon class="logo" />
            <CloseIcon class="close" @click="props.toggleMenu" />
        </header>
        <div class="links">
            <a href="#services" class="text-1" @click="toggleMenu">Услуги</a>
            <a href="#processes" class="text-1" @click="toggleMenu"
                >Этапы работы</a
            >
            <a href="#portfolio" class="text-1" @click="toggleMenu"
                >Портфолио</a
            >
            <a
                href="#team"
                class="text-1"
                @click="toggleMenu"
                v-if="
                    !teamStore.isLoading &&
                    teamStore.teamMembers.length > 0
                "
                >Компетенции</a
            >
            <a
                href="#blog"
                class="text-1"
                @click="toggleMenu"
                v-if="
                    !blogStore.isLoading &&
                    blogStore.videosData.length > 0
                "
                >Блог</a
            >
        </div>
        <div class="connect">
            <h1 class="number">
                <a href="tel:+79876543210">+7 987 654 - 32 - 10</a>
            </h1>
            <div class="social-networks">
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
                                'https://youtube.com/@gears.official.company?si=Nfwko9G3bOTaHhCI',
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
                    @click="
                        () =>
                            goToLink(
                                'https://habr.com/ru/users/gears_official/',
                            )
                    "
                />
                <RutubeIcon
                    class="rutube-icon"
                    @click="
                        () => goToLink('https://rutube.ru/channel/56314948/')
                    "
                />
            </div>
            <h1 class="mail">
                <a href="mailto:gears.team@mail.ru">gears.team@mail.ru</a>
            </h1>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";
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

    > h1 {
        > a {
            text-decoration: none;
        }
    }
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
