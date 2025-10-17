<template>
  <section class="title page-container">
    <h1 class="typewriter">
      {{ displayedText }}<span v-if="!typingComplete" class="cursor">|</span>
    </h1>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const fullText = "Создаём решения, приносящие деньги вашему бизнесу";
const displayedText = ref("");
const typingComplete = ref(false);

onMounted(() => {
  startTyping();
});

const startTyping = () => {
  let i = 0;
  const timer = setInterval(() => {
    if (i < fullText.length) {
      displayedText.value += fullText.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      typingComplete.value = true;
    }
  }, 50);
};
</script>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.title {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 10rem 0;

  text-align: center;
  line-height: 46px;
}

.typewriter {
  max-width: 100%;
  min-height: 200px;

  padding-right: 4px;

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
