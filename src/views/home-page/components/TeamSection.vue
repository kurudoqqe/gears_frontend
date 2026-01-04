<script setup>
import { onUnmounted, onMounted, ref } from "vue";

import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import HabrIcon from "@/components/icons/HabrIcon.vue";
import { useTeamStore } from "@/stores/team.js";

const teamStore = useTeamStore();
const teamContainer = ref(null);
const showLeftArrow = ref(false);
const showRightArrow = ref(false);
const currentActiveMember = ref(null);

const checkScroll = () => {
    if (!teamContainer.value) return;

    if (currentActiveMember.value !== null) {
        currentActiveMember.value = null;
    }

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

const setActiveMember = (id) => {
    if (id === currentActiveMember.value) {
        currentActiveMember.value = null;
    } else {
        currentActiveMember.value = id;
    }
};

const getIconComponent = (socialLink) => {
    if (!socialLink || !socialLink.type) return null;

    const iconMap = {
        telegram: TelegramIcon,
        habr: HabrIcon,
    };
    return iconMap[socialLink.type] || null;
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
    <section
        class="team-section page-container"
        id="team"
        v-if="!teamStore.isLoading && teamStore.teamMembers.length > 0"
    >
        <h1>О команде</h1>
        <div class="team-wrapper">
            <ArrowIcon
                view="left"
                class="arrow left-arrow hover"
                :class="{ visible: showLeftArrow }"
                @click="scrollLeft"
            />
            <div class="team" ref="teamContainer">
                <div
                    v-for="member in teamStore.teamMembers"
                    :key="member.id"
                    class="member-container"
                    :class="{ 'is-open': currentActiveMember === member.id }"
                >
                    <div
                        class="member"
                        :style="{
                            background: `linear-gradient(180deg, rgba(33, 33, 33, 0.18) 69.82%, rgba(33, 33, 33, 0.9) 92.55%), url(${member.photo_url || ''}) center/cover no-repeat`,
                        }"
                        @click="setActiveMember(member.id)"
                    >
                        <div class="member-text">
                            <h2>{{ member.name }}</h2>
                            <p class="text-1">{{ member.position }}</p>
                        </div>
                    </div>
                    <Transition name="slide">
                        <div
                            class="member-info"
                            v-if="currentActiveMember === member.id"
                        >
                            <p class="text-2" v-if="member.bio">
                                {{ member.bio }}
                            </p>
                            <div
                                class="icons-container"
                                v-if="
                                    member.social_links &&
                                    member.social_links.length > 0
                                "
                            >
                                <component
                                    v-for="(
                                        socialLink, index
                                    ) in member.social_links"
                                    :key="index"
                                    :is="getIconComponent(socialLink)"
                                    class="member-icon"
                                />
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
            <ArrowIcon
                view="right"
                class="arrow right-arrow hover"
                :class="{ visible: showRightArrow }"
                @click="scrollRight"
            />
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";
@use "sass:map";

.team-section {
    display: flex;
    flex-direction: column;
    gap: 50px;

    margin: 200px auto 0;

    position: relative;

    @include variables.desktop {
        margin: 150px auto 0;
    }

    @include variables.mobile {
        margin: 150px auto 0;
    }
}

.team-wrapper {
    position: relative;

    width: 100%;

    @include variables.desktop {
        margin: 0 50px;
    }
}

.team {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;

    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
}

.member-container {
    display: flex;
    position: relative;
    height: 550px;
    transition:
        height 300ms ease-in-out,
        width 300ms ease-in-out;
    width: 370px;

    @include variables.desktop {
        &.is-open {
            width: 730px;
        }
    }

    @include variables.mobile {
        flex-direction: column;

        &.is-open {
            height: 1000px;
        }
    }
}

.member {
    display: flex;
    flex-shrink: 0;
    gap: 10px;

    position: relative;
    z-index: 2;

    padding: 1.25rem;

    width: 370px;

    transition: transform 300ms;

    @include variables.mobile {
        height: 550px;
    }

    @media (hover: hover) {
        &:hover {
            transform: scale(1.075);

            .member-text {
                transform: translateY(-40%);
            }
        }
    }

    .member-text {
        display: flex;
        flex-direction: column;
        align-self: end;
        gap: 10px;

        transition: transform 300ms;
    }
}

.member-info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    min-width: 340px;

    padding: 2rem 1.25rem;

    background-color: map.get(variables.$color, primary);

    .icons-container {
        display: flex;
        gap: 20px;

        margin-top: auto;
    }
}

.member-icon {
    width: 30px;
    height: 30px;

    cursor: pointer;
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

    @include variables.mobile {
        display: none;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: all 300ms ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-10%);
}

@include variables.mobile {
    .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
        transform: translateY(-10%);
    }
}
</style>
