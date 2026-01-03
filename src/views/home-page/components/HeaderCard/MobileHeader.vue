<script setup>
import ButtonsBackground from "@/assets/images/mobile-header-background.png";
import TypewriterComponent from "@/components/TypewriterComponent.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import IphoneImg from "@/assets/images/Iphone-full.png";
import MacBook from "@/assets/images/Macbook-full.png";
import { jumpToSection } from "@/utils.js";
</script>

<template>
    <section class="header-card page-container">
        <TypewriterComponent
            title="Сайты, веб-приложения, боты — под ключ"
            class="card-title"
        />
        <div class="card-description">
            <span class="text-1">Ваш телеграм бот от 3 дней</span>
            <span class="text-1">Сайт для бизнеса от 30 000 руб</span>
        </div>
        <div>
            <div class="card-images">
                <img
                    :src="MacBook"
                    alt="MacBook image"
                    class="macbook-img"
                    @dragstart.prevent
                />
                <img
                    :src="IphoneImg"
                    alt="Iphone image"
                    class="iphone-img"
                    @dragstart.prevent
                />
            </div>
            <div class="buttons-container">
                <ButtonComponent
                    class="button text-1"
                    @click="jumpToSection('feedback')"
                    secondary
                    >Заполнить заявку</ButtonComponent
                >
                <ButtonComponent
                    class="button text-1"
                    @click="jumpToSection('portfolio')"
                    >Посмотреть наши работы</ButtonComponent
                >
                <img :src="ButtonsBackground" alt="" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.header-card {
    display: flex;
    flex-direction: column;

    margin: 30px auto 0;

    overflow: hidden;

    @include variables.desktop {
        height: 740px;
    }
}

.card-title {
    min-height: 145px;
    margin-bottom: 55px;

    @include variables.desktop-short {
        max-width: 70%;
    }

    @include variables.tablet {
        max-width: 90%;
    }
}

.card-description {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: fit-content;

    margin-top: 50px;

    > span.text-1 {
        font-family: Inter, sans-serif;
        text-transform: uppercase;
    }
}

.card-images {
    position: relative;
    width: 100%;
    height: 360px;
    margin-top: 20px;
}

.buttons-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;

    > img {
        display: none;
        position: absolute;
        bottom: -100px;
        z-index: 12;

        width: 100vw;
        height: 400px;

        @include variables.tablet {
            display: block;
        }
    }
}

.button {
    z-index: 13;

    padding: 0.675rem 0;

    color: map.get(variables.$color, white);

    &:hover {
        color: map.get(variables.$color, black);
        font-weight: 700;
    }
}

.iphone-img {
    position: absolute;
    bottom: -35px;
    left: 375px;
    z-index: 11;

    max-height: 400px;
    max-width: 300px;

    width: 100%;
    height: 100%;

    @include variables.tablet {
        left: 150px;
        bottom: -65px;

        max-height: 350px;
        max-width: 250px;
    }
}

.macbook-img {
    position: absolute;
    z-index: 10;
    left: 100px;
    bottom: 0;

    max-height: 250px;
    max-width: 400px;

    width: 100%;
    height: 100%;

    @include variables.tablet {
        left: 0;
    }
}
</style>
