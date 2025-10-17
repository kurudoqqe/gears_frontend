<script setup>
const props = defineProps({
  textarea: {
    required: false,
    default: false,
    type: Boolean,
  },
  placeholder: {
    required: false,
    type: String,
  },
  isError: {
    required: false,
    type: Boolean,
  },
});

const model = defineModel();
</script>

<template>
  <textarea
    v-if="textarea"
    class="input-component textarea"
    v-bind="props"
    v-model="model"
    :placeholder="props.placeholder"
    :class="{ error: isError }"
  ></textarea>
  <input
    v-else
    class="input-component"
    type="text"
    v-bind="props"
    v-model="model"
    :placeholder="props.placeholder"
    :class="{ error: isError }"
  />
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.input-component {
  padding: 0.65rem 1.25rem;

  border: 1px solid map.get(variables.$color, white);
  background-color: transparent;
  outline: none;

  transition: all 200ms ease-in-out;

  &:hover,
  &:focus {
    background-color: rgba(map.get(variables.$color, white), 0.1);
  }

  &::placeholder {
    color: map.get(variables.$color, white);
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    line-height: 26px;

    @include variables.mobile {
      display: none;
      line-height: normal;
      font-weight: 300;
    }
  }

  &:focus {
    &::placeholder {
      visibility: hidden;
    }
  }

  &.textarea {
    resize: none;
  }

  &.error {
    border-color: map.get(variables.$color, error);
  }
}
</style>
