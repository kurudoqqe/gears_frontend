<script setup>
import { onUnmounted, onMounted, ref } from "vue";

import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import TeamMember from "@/assets/images/team.png";

const teamContainer = ref(null);
const showLeftArrow = ref(false);
const showRightArrow = ref(false);

const checkScroll = () => {
  if (!teamContainer.value) return;

  showLeftArrow.value = teamContainer.value.scrollLeft > 0;
  showRightArrow.value =
    teamContainer.value.scrollLeft <
    teamContainer.value.scrollWidth - teamContainer.value.clientWidth;
};

const scrollLeft = () => {
  if (teamContainer.value) {
    teamContainer.value.scrollBy({ behavior: "smooth", left: -300 });
  }
};

const scrollRight = () => {
  if (teamContainer.value) {
    teamContainer.value.scrollBy({ behavior: "smooth", left: 300 });
  }
};

onMounted(() => {
  if (teamContainer.value) {
    teamContainer.value.addEventListener("scroll", checkScroll);
    checkScroll();
  }
});

onUnmounted(() => {
  if (teamContainer.value) {
    teamContainer.value.removeEventListener("scroll", checkScroll);
  }
});
</script>

<template>
  <section class="team-section page-container">
    <h1>О команде</h1>
    <div class="team-wrapper">
      <ArrowIcon
        view="left"
        class="arrow left-arrow"
        :class="{ visible: showLeftArrow }"
        @click="scrollLeft"
      />
      <div class="team" ref="teamContainer">
        <div class="member">
          <img :src="TeamMember" alt="team-member" @dragstart.prevent />
          <h2>Иван Ткачёв</h2>
          <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur. Augue dolor nunc tristique
            gravida sit at condimentum. Tellus orci adipiscing porta elementum
            id mollis.
          </p>
        </div>
        <div class="member">
          <img :src="TeamMember" alt="team-member" @dragstart.prevent />
          <h2>Иван Ткачёв</h2>
          <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur. Augue dolor nunc tristique
            gravida sit at condimentum. Tellus orci adipiscing porta elementum
            id mollis.
          </p>
        </div>
        <div class="member">
          <img :src="TeamMember" alt="team-member" @dragstart.prevent />
          <h2>Иван Ткачёв</h2>
          <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur. Augue dolor nunc tristique
            gravida sit at condimentum. Tellus orci adipiscing porta elementum
            id mollis.
          </p>
        </div>
        <div class="member">
          <img :src="TeamMember" alt="team-member" @dragstart.prevent />
          <h2>Иван Ткачёв</h2>
          <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur. Augue dolor nunc tristique
            gravida sit at condimentum. Tellus orci adipiscing porta elementum
            id mollis.
          </p>
        </div>
        <div class="member">
          <img :src="TeamMember" alt="team-member" @dragstart.prevent />
          <h2>Иван Ткачёв</h2>
          <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur. Augue dolor nunc tristique
            gravida sit at condimentum. Tellus orci adipiscing porta elementum
            id mollis.
          </p>
        </div>
        <div class="member">
          <img :src="TeamMember" alt="team-member" @dragstart.prevent />
          <h2>Иван Ткачёв</h2>
          <p class="text-1">Гений, миллиардер, плейбой, филантроп</p>
          <p class="text-1">
            Lorem ipsum dolor sit amet consectetur. Augue dolor nunc tristique
            gravida sit at condimentum. Tellus orci adipiscing porta elementum
            id mollis.
          </p>
        </div>
      </div>
      <ArrowIcon
        view="right"
        class="arrow right-arrow"
        :class="{ visible: showRightArrow }"
        @click="scrollRight"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.team-section {
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin: 200px auto 0;

  position: relative;
}

.team-wrapper {
  position: relative;

  width: 100%;
}

.team {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;

  overflow-x: auto;

  scroll-behavior: smooth;
}

.member {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;

  width: 265px;

  > img {
    width: 100%;
    height: 415px;
    object-fit: cover;
  }
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  z-index: 10;

  width: 40px;
  height: 40px;

  opacity: 0;

  background-color: rgba(map.get(variables.$color, primary), 0.75);

  transition:
    opacity,
    background-color 200ms ease-in-out;

  &.left-arrow {
    left: 10px;
  }

  &.right-arrow {
    right: 10px;
  }

  &.visible {
    opacity: 1;

    cursor: pointer;
  }
}
</style>
