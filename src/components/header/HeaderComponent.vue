<script setup>
import { useWindowWidth } from "@/hooks/useWindowWidth.js";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import { useTeamStore } from "@/stores/team.js";
import { useBlogStore } from "@/stores/blog.js";

const windowWidth = useWindowWidth();
const teamStore = useTeamStore();
const blogStore = useBlogStore();

const props = defineProps({
    toggleMenu: {
        type: Function,
        required: true,
    },
});
</script>

<template>
    <header class="page-container">
        <LogoIcon class="logo" />
        <div class="header-links" v-if="windowWidth > 1000">
            <a href="#services" class="text-1">Услуги</a>
            <a href="#processes" class="text-1">Этапы работы</a>
            <a href="#portfolio" class="text-1">Портфолио</a>
            <a
                href="#team"
                class="text-1"
                v-if="!teamStore.isLoading && teamStore.teamMembers.length > 0"
                >Компетенции</a
            >
            <a
                href="#blog"
                class="text-1"
                v-if="!blogStore.isLoading && blogStore.videosData.length > 0"
                >Блог</a
            >
        </div>
        <a href="#feedback" class="text-1" v-if="windowWidth > 1000"
            >Связаться</a
        >
        <MenuIcon class="menu-icon" @click="props.toggleMenu" v-else />
    </header>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables.scss";
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

        @include variables.desktop-short {
            height: 20px;
        }
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
        font-weight: 400;

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

.menu-icon {
    width: 30px;
    height: 20px;

    cursor: pointer;
}
</style>
