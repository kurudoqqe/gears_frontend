<script setup>
defineProps({
    currentPage: {
        required: true,
        type: Number,
        default: 1,
    },
    totalPages: {
        required: true,
        type: Number,
        default: 1,
    },
});

defineEmits(["page-change"]);
</script>

<template>
    <div class="blog-pagination">
        <button
            v-for="page in totalPages"
            :key="page"
            class="pagination"
            :class="{ active: currentPage === page }"
            @click="$emit('page-change', page)"
            :aria-label="`Перейти на страницу ${page}`"
        ></button>
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";
@use "sass:map";

.blog-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
}

.pagination {
    width: 40px;
    height: 6px;
    border: none;
    background-color: rgba(map.get(variables.$color, white), 0.3);
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(map.get(variables.$color, white), 0.6);
        transform: scale(1.1);
    }

    &.active {
        background-color: map.get(variables.$color, white);
        transform: scale(1.1);
    }

    &:focus-visible {
        outline: 2px solid map.get(variables.$color, white);
        outline-offset: 2px;
    }
}
</style>
