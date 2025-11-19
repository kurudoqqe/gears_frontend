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
      {{ displayedText }}<span v-if="!typingComplete" class="cursor">|</span>
    </h1>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.title {
  display: flex;

  margin: 0 auto;

  line-height: 46px;
}

.typewriter {
  max-width: 100%;

  padding-right: 250px;

  white-space: normal;
  overflow: visible;
  word-wrap: break-word;
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
