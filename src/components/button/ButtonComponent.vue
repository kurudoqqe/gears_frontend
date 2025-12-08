<script setup>
const props = defineProps({
    secondary: {
        required: false,
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <button
        v-bind="props"
        class="button-component"
        :class="{ secondary: props.secondary }"
    >
        <slot />
    </button>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";
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

    &.secondary {
        background-color: map.get(variables.$color, white);
        border: 1px solid map.get(variables.$color, white);
        color: map.get(variables.$color, black);
        font-weight: 700;
    }

    &.secondary:hover {
        background-color: transparent;
        color: map.get(variables.$color, white);
    }
}
</style>
