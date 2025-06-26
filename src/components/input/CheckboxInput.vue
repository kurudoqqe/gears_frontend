<script setup>
import CheckmarkIcon from "@/components/icons/CheckmarkIcon.vue";

const props = defineProps({});
const isClicked = defineModel({
  default: false,
});

const handleClick = () => {
  isClicked.value = !isClicked.value;
};
</script>

<template>
  <div class="checkbox-input" v-bind="props" @click="handleClick">
    <span class="checkbox" :class="isClicked ? 'active' : ''">
      <CheckmarkIcon v-if="isClicked" class="checkmark-icon" />
    </span>
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.checkbox-input {
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  user-select: none;

  &:hover {
    .checkbox:not(.active) {
      background-color: rgba(map.get(variables.$color, white), 0.1);

      transition: background-color 200ms ease-in-out;
    }
  }
}

.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  border: 1px solid map.get(variables.$color, white);

  transition:
    background-color,
    border 200ms ease-in-out;

  &.active {
    background-color: map.get(variables.$color, white);
    border: 1px solid map.get(variables.$color, secondary);
  }
}

.checkmark-icon {
  width: 15px;
  height: 15px;
}
</style>
