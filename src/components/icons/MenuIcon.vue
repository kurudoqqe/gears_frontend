<script setup>
const props = defineProps({});
</script>

<template>
  <svg
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="props"
  >
    <rect width="30" height="4" rx="2" fill="white" />
    <rect y="8" width="30" height="4" rx="2" fill="white" />
    <rect y="16" width="30" height="4" rx="2" fill="white" />
  </svg>
</template>
