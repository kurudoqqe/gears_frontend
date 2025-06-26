<script setup>
import LogoIcon from "@/components/icons/LogoIcon.vue";
</script>

<template>
  <header class="page-container">
    <LogoIcon class="logo" />
    <div class="header-links">
      <a href="#services" class="text-1">Услуги</a>
      <a href="#processes" class="text-1">Этапы работы</a>
      <a href="#portfolio" class="text-1">Портфолио</a>
      <a href="#team" class="text-1">Компетенции</a>
      <a href="#blog" class="text-1">Блог</a>
    </div>
    <a href="#feedback" class="text-1">Связаться</a>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 3.75rem 1.25rem 1rem;

  border-bottom: 1px solid map.get(variables.$color, white);

  .logo {
    width: 115px;
    height: 35px;
  }

  a {
    opacity: 0.85;

    transition: 150ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
}

.header-links {
  display: flex;
  gap: 30px;

  > a {
    padding: 0.25rem 1.25rem;

    text-decoration: none;

    border-radius: 20px;
    transition:
      background-color,
      box-shadow,
      200ms ease-in-out;

    &:hover {
      background-color: rgba(map.get(variables.$color, white), 0.1);
      box-shadow: 0 0 7px 0 map.get(variables.$color, white);
    }
  }
}
</style>
