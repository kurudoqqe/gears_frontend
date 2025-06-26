<script setup>
import CheckboxInput from "@/components/input/CheckboxInput.vue";
import Button from "@/components/button/ButtonComponent.vue";
import TextInput from "@/components/input/TextInput.vue";
</script>

<template>
  <section class="feedback page-container" id="feedback">
    <h1>Оставьте заявку и мы свяжемся с вами</h1>
    <div class="feedback-container">
      <div class="feedback-input">
        <div class="checkbox-container">
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
        <div class="input-container">
          <TextInput placeholder="фио *" />
          <TextInput placeholder="телефон *" />
          <TextInput
            placeholder="напишите свой вопрос, чтобы мы смогли провести подробную консультацию"
            class="textarea"
            textarea
          />
        </div>
      </div>
      <div class="button-container">
        <Button class="feedback-button">Оставить заявку</Button>
        <p class="info text-2">
          * Нажимая на кнопку, я соглашаюсь на обработку персональных данных,
          <br />
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
}

.feedback-container {
  display: flex;
  gap: 30px;
}

.feedback-input {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 70px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.textarea {
  height: 130px;

  padding: 1rem 1.25rem;
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
}

.info {
  position: absolute;
  top: 105%;
}
</style>
