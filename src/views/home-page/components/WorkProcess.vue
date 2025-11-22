<script setup>
import { workProcesses } from "@/mocks/workProcesses.mock.js";
import ArrowRight from "@/assets/images/arrow-right.png";
import ArrowLeft from "@/assets/images/arrow-left.png";
</script>

<template>
  <section class="work-process page-container" id="processes">
    <h1>процесс работы</h1>
    <div class="processes">
      <div
        v-for="(process, index) in workProcesses"
        :key="index"
        class="work"
        :class="`work-${process.alignment}`"
      >
        <div
          class="work-content"
          :class="`${process.width ? process.width : ''}`"
        >
          <img
            :src="process.image"
            :alt="++index"
            class="work-number"
            @dragstart.prevent
          />
          <div class="process-description">
            <h2>{{ process.title }}</h2>
            <p class="text-2">{{ process.description }}</p>
          </div>
        </div>
        <img
          v-if="index < workProcesses.length"
          :src="index % 2 ? ArrowRight : ArrowLeft"
          alt="arrow"
          class="work-arrow"
          :class="workProcesses.length === ++index ? 'last' : undefined"
          @dragstart.prevent
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";

.work-process {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 200px auto 0;

  @include variables.mobile {
    margin: 150px auto 0;
  }
}

.processes {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.work {
  display: flex;
  gap: 25px;

  &-left {
    margin-top: 20px;
  }

  &-right {
    flex-direction: row-reverse;
    align-self: end;

    > h2 {
      align-self: end;
    }
  }
}

.work-content {
  display: flex;
  align-items: center;
  gap: 30px;

  max-width: 600px;

  &.small {
    max-width: 530px;
  }

  &.medium {
    max-width: 600px;
  }

  &.large {
    max-width: 630px;
  }
}

.work-number {
  max-height: 100px;
  width: fit-content;
}

.work-arrow {
  max-height: 100px;
  width: 100%;

  transform: translateY(75px);

  &.last {
    max-width: 215px;
  }
}

.process-description {
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 475px;

  text-align: justify;
  line-height: 100%;
}
</style>
