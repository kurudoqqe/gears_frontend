<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
    title: {
        required: true,
        type: String,
    },
});

const displayedText = ref("");
const typingComplete = ref(false);

onMounted(() => {
    startTyping();
});

const startTyping = () => {
    let i = 0;
    const timer = setInterval(() => {
        if (i < props.title.length) {
            displayedText.value += props.title.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            typingComplete.value = true;
        }
    }, 50);
};
</script>

<template>
    <section class="title page-container" v-bind="props">
        <h1 class="typewriter">
            <slot />
            {{ displayedText
            }}<span v-if="!typingComplete" class="cursor">|</span>
        </h1>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";
@use "sass:map";

.title {
    display: flex;
    line-height: 46px;
}

.typewriter {
    white-space: normal;
    overflow: visible;
    word-wrap: break-word;

    font-size: 2rem;
    user-select: none;

    @include variables.desktop {
        font-size: 2.5rem;
    }

    @include variables.tablet {
        font-size: 1.5rem;
    }
}

.cursor {
    animation: blink 1s infinite;
    font-weight: bold;
}

@keyframes blink {
    0%,
    50% {
        opacity: 1;
    }
    51%,
    100% {
        opacity: 0;
    }
}
</style>
