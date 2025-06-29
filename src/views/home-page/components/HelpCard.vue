<script setup>
import GradientBackground from "@/assets/images/card-background.png";
import Button from "@/components/button/ButtonComponent.vue";
import { useWindowWidth } from "@/hooks/useWindowWidth.js";

const windowWidth = useWindowWidth();

const jumpToFeedback = () => {
  const feedbackId = document.querySelector("#feedback");
  window.scrollTo(0, feedbackId.offsetTop - 125);
};
</script>

<template>
  <section
    class="help-card page-container"
    :style="{ background: `url(${GradientBackground})` }"
  >
    <h1>
      не знаете <br v-if="windowWidth <= 500" />
      что выбрать?
    </h1>
    <Button class="help-button text-1" @click="jumpToFeedback">
      Заполните заявку
    </Button>
    <p class="text-1">и мы вам подскажем</p>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";

.help-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 570px;

  margin: 0 auto;

  > h1 {
    text-align: center;
    letter-spacing: 2.5px;
  }

  @include variables.desktop {
    height: 400px;
  }

  @include variables.tablet {
    height: 350px;
  }

  @include variables.mobile {
    height: 540px;

    padding: 0 1.75rem;
  }
}

.help-button {
  margin-top: 20px;
  padding: 0.65rem 6.25rem;

  @include variables.mobile {
    margin-top: 30px;

    padding: 0.65rem 3.5rem;
  }
}
</style>
