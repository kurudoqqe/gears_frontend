<script setup>
import Button from "@/components/button/ButtonComponent.vue";
import MainVideo from "@/assets/videos/main-video.mp4";
import { jumpToSection } from "@/utils.js";
</script>

<template>
    <section class="video page-container">
        <video controls autoplay muted :src="MainVideo" />
        <Button class="video-button text-1" @click="jumpToSection('feedback')"
            >Заполнить заявку</Button
        >
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";

.video {
    display: flex;
    flex-direction: column;

    margin: 30px auto 200px;

    @include variables.mobile {
        margin: 20px auto 150px;

        > video {
            height: 640px;
        }
    }
}

.video-button {
    margin-top: 20px;
    padding: 0.65rem;
}
</style>
