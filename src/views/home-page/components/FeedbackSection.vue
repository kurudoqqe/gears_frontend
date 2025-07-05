<script setup>
import CheckboxInput from "@/components/input/CheckboxInput.vue";
import Button from "@/components/button/ButtonComponent.vue";
import { useWindowWidth } from "@/hooks/useWindowWidth.js";
import TextInput from "@/components/input/TextInput.vue";

const windowWidth = useWindowWidth();
</script>

<template>
  <section class="feedback page-container" id="feedback">
    <h1>Оставьте заявку и мы свяжемся с вами</h1>
    <div class="feedback-container">
      <div class="feedback-input">
        <div class="checkbox-container" v-if="windowWidth > 750">
          <CheckboxInput>
            <p>Телефон</p>
          </CheckboxInput>
          <CheckboxInput>
            <p class="text-1">Telegram</p>
          </CheckboxInput>
          <CheckboxInput>
            <p class="text-1">Whatsapp</p>
          </CheckboxInput>
        </div>
        <div class="input-container">
          <TextInput placeholder="фио *" />
          <TextInput placeholder="телефон *" />
          <TextInput
            placeholder="напишите свой вопрос, чтобы мы смогли провести подробную консультацию"
            class="textarea"
            textarea
          />
        </div>
        <div class="checkbox-container" v-if="windowWidth <= 750">
          <CheckboxInput>
            <p class="text-1">Телефон</p>
          </CheckboxInput>
          <CheckboxInput>
            <p class="text-1">Telegram</p>
          </CheckboxInput>
          <CheckboxInput>
            <p class="text-1">Whatsapp</p>
          </CheckboxInput>
        </div>
      </div>
      <div class="button-container">
        <Button class="feedback-button">Оставить заявку</Button>
        <p class="info text-1">
          * Нажимая на кнопку, я соглашаюсь на обработку персональных данных,
          <br v-if="windowWidth > 500" />
          с публичной офертой
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.feedback {
  display: flex;
  flex-direction: column;
  gap: 110px;

  margin: 0 auto;

  @include variables.mobile {
    gap: 50px;
  }
}

.feedback-container {
  display: flex;
  gap: 30px;

  @include variables.tablet {
    flex-direction: column;
  }

  @include variables.mobile {
    gap: 50px;
  }
}

.feedback-input {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @include variables.mobile {
    gap: 20px;
  }
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 70px;

  @include variables.tablet {
    justify-content: space-between;
    gap: 0;
  }
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @include variables.mobile {
    gap: 20px;
  }
}

.textarea {
  height: 130px;

  padding: 1rem 1.25rem;

  @include variables.mobile {
    height: fit-content;

    padding: 0.65rem;
  }
}

.button-container {
  display: flex;

  position: relative;

  width: 100%;
}

.feedback-button {
  width: 100%;

  font-family: "Dela Gothic One", sans-serif;
  font-size: 1.25rem;

  @include variables.tablet {
    padding: 0.5rem;
  }

  @include variables.mobile {
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 300;
  }
}

.info {
  position: absolute;
  top: 105%;

  @include variables.tablet {
    top: 120%;
  }

  @include variables.mobile {
    font-size: 0.8rem;
    text-align: center;
  }
}
</style>
