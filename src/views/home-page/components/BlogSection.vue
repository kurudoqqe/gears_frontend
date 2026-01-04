<script setup>
import { onMounted, watch } from "vue";

import BlogPagination from "@/views/home-page/components/BlogPagination.vue";
import { useWindowWidth } from "@/hooks/useWindowWidth.js";
import { useBlogStore } from "@/stores/blog.js";
import { getBlocksPage } from "@/api/blog.js";

const windowWidth = useWindowWidth();
const blogStore = useBlogStore();

const getPostsPerPage = () => {
    if (windowWidth.value > 1650) return 5;
    if (windowWidth.value > 1100) return 4;
    if (windowWidth.value > 750) return 3;
    return 2;
};

const getMediaUrl = (post) => {
    if (post.video_url) return { url: post.video_url, type: "video" };
    if (post.audio_url) return { url: post.audio_url, type: "audio" };
    if (post.content_url) return { url: post.content_url, type: "content" };
    return { type: null, url: null };
};

const handlePageChange = async (page) => {
    try {
        blogStore.isLoading = true;
        blogStore.error = null;
        const perPage = getPostsPerPage();
        const response = await getBlocksPage(page, perPage);
        blogStore.videosData = response.data.posts;
        blogStore.currentPage = page;
        blogStore.totalPages = response.data.total_pages || 1;
    } catch (err) {
        console.error("Ошибка при загрузке блога:", err);
        blogStore.error = err;
    } finally {
        blogStore.isLoading = false;
    }
};

onMounted(async () => {
    // Загружаем данные только если они еще не загружены
    if (blogStore.videosData.length === 0) {
        await handlePageChange(1);
    }
});

watch(windowWidth, () => {
    handlePageChange(blogStore.currentPage);
});
</script>

<template>
    <section
        class="blog page-container"
        id="blog"
        v-if="!blogStore.isLoading && blogStore.videosData.length > 0"
    >
        <h1>Блог</h1>
        <div class="blog-content">
            <div
                v-for="post in blogStore.videosData"
                :key="post.id"
                class="blog-video"
            >
                <video
                    v-if="getMediaUrl(post).type === 'video'"
                    controls
                    :src="getMediaUrl(post).url"
                />
                <audio
                    v-else-if="getMediaUrl(post).type === 'audio'"
                    controls
                    :src="getMediaUrl(post).url"
                />
                <video
                    v-else-if="getMediaUrl(post).type === 'content'"
                    controls
                    :src="getMediaUrl(post).url"
                />
                <p class="text-2">{{ post.title }}</p>
            </div>
        </div>

        <BlogPagination
            v-if="blogStore.totalPages > 1"
            :current-page="blogStore.currentPage"
            :total-pages="blogStore.totalPages"
            @page-change="handlePageChange"
        />
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/global/variables";
@use "sass:map";

.blog {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 0 auto;
}

.blog-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @include variables.desktop {
        justify-content: space-between;
    }

    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.blog-video {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 280px;

    > video {
        border: 1px solid map.get(variables.$color, white);
        height: 280px;
        width: 100%;
        object-fit: cover;
    }

    > audio {
        width: 100%;
    }

    @include variables.desktop-short {
        margin: 0 auto;
    }

    @media (max-width: 650px) {
        width: 100%;
        max-width: 350px;

        > video {
            height: 250px;
        }
    }
}

.text-2 {
    text-align: center;
    margin: 0;
    line-height: 1.4;
}
</style>
