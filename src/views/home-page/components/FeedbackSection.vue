<script setup>
import { ref } from "vue";

import ButtonComponent from "@/components/button/ButtonComponent.vue";
import TextInput from "@/components/input/TextInput.vue";

// const windowWidth = useWindowWidth();

const formData = ref({
  contacts: {
    telegram: false,
    whatsapp: false,
    phone: false,
  },
  question: "",
  phone: "",
  fio: "",
});

const errors = ref({
  question: false,
  phone: false,
  fio: false,
});

// const sendFeedback = () => {
//   const contactsArray = [];
//   if (formData.value.contacts.telegram) contactsArray.push("Telegram");
//   if (formData.value.contacts.whatsapp) contactsArray.push("Whatsapp");
//   if (formData.value.contacts.phone) contactsArray.push("Телефон");
//
//   errors.value.question = formData.value.question === "";
//   errors.value.phone = formData.value.phone === "";
//   errors.value.fio = formData.value.fio === "";
//
//   if (errors.value.phone || errors.value.fio || errors.value.question) {
//     return null;
//   }
//
//   const requestData = {
//     ...formData.value,
//     question: formData.value.question,
//     phone: formData.value.phone,
//     contacts: contactsArray,
//     fio: formData.value.fio,
//   };
//
//   sendRequest(requestData);
// };
</script>

<template>
  <section class="feedback page-container" id="feedback">
    <h1>Оставьте заявку и мы сразу свяжемся с вами</h1>
    <div class="feedback-container">
      <div class="feedback-input">
        <TextInput
          v-model="formData.fio"
          placeholder="ФИО *"
          :is-error="errors.fio"
        />
        <TextInput
          v-model="formData.phone"
          placeholder="Телефон *"
          :is-error="errors.phone"
        />
        <TextInput placeholder="Почта *" :is-error="errors.phone" />
        <TextInput placeholder="Телеграм ID *" />
        <TextInput
          v-model="formData.question"
          placeholder="Напишите свой вопрос, чтобы мы смогли провести подробную консультацию"
          class="textarea"
          textarea
          :is-error="errors.question"
        />
      </div>
      <div class="button-container">
        <ButtonComponent class="feedback-button" @click="sendFeedback"
          >Связаться</ButtonComponent
        >
        <p class="text-2">
          * Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с
          публичной офертой
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

$desktop-width: 1200px;

.feedback {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  margin: 0 auto;
}

.feedback-container {
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 780px;
  width: 100%;
}

.feedback-input {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

  text-align: center;
  font-size: 1.25rem;
  font-weight: 300;

  &::placeholder {
    font-size: 1.25rem;
  }

  @include variables.mobile {
    height: fit-content;

    padding: 0.65rem;
  }
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.feedback-button {
  width: 100%;
  height: 130px;

  padding: 1rem 1.25rem;

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
</style>
