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
}
</style>
