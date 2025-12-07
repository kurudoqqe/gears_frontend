<script setup>
const props = defineProps({});
</script>

<template>
    <div class="card-component" v-bind="props">
        <slot />
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";
@use "sass:map";

.card-component {
    background-color: rgba(map.get(variables.$color, white), 0.1);
}
</style>
