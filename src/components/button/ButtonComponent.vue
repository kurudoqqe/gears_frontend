<script setup>
const props = defineProps({});
</script>

<template>
  <button v-bind="props" class="button-component">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.button-component {
  border: 1px solid map.get(variables.$color, white);
  background-color: transparent;

  cursor: pointer;
  outline: none;

  transition:
    color,
    background-color,
    border-color,
    300ms ease-in-out;

  &:hover {
    background-color: map.get(variables.$color, white);
    color: map.get(variables.$color, black);

    border: 1px solid map.get(variables.$color, secondary);
  }
}
</style>
