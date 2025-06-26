<script setup>
const props = defineProps({});
</script>

<template>
  <svg
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="props"
  >
    <rect
      x="2"
      y="2"
      width="41"
      height="41"
      rx="13"
      stroke="white"
      stroke-width="4"
    />
    <path
      d="M32.6502 26.0482C32.3455 27.8558 30.7081 28.9387 28.875 28.9387L33 36H27L23.25 28.9387H15V36H9V14H16.08V14.0314H22.23H26.9481C29.9034 14.0314 32.5584 15.9092 32.8627 18.8488C32.9464 19.658 33 20.5435 33 21.485C33 23.3776 32.8451 24.892 32.6502 26.0482ZM15 18.739V24.2311H24H25.875C26.7034 24.2311 27.375 23.5595 27.375 22.7311V20.239C27.375 19.4105 26.7034 18.739 25.875 18.739H24H15Z"
      fill="white"
    />
    <circle cx="34.5" cy="12.5" r="2.5" fill="white" />
  </svg>
</template>
