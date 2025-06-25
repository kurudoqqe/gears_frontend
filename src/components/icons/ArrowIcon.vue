<script setup>
const props = defineProps({
  view: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <svg
    viewBox="0 0 32 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="props"
    :class="view"
  >
    <path
      d="M22 12.4518L20.2153 10L10.4945 23.3624C10.3378 23.5765 10.2134 23.8311 10.1285 24.1116C10.0437 24.392 10 24.6928 10 24.9965C10 25.3003 10.0437 25.6011 10.1285 25.8815C10.2134 26.162 10.3378 26.4166 10.4945 26.6307L20.2153 40L21.9983 37.5482L12.8746 25L22 12.4518Z"
      fill="white"
    />
  </svg>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

svg {
  border-radius: 16px;

  transition:
    background-color,
    box-shadow,
    150ms ease-in-out;

  &.left {
    transform: rotateY(0);
  }

  &.right {
    transform: rotateY(180deg);
  }

  &:hover {
    background-color: rgba(map.get(variables.$color, white), 0.1);
    box-shadow: 0 0 7px 0 map.get(variables.$color, white);
  }
}
</style>
