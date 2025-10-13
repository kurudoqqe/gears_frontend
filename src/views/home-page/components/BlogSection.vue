<script setup>
import { onMounted, computed, watch, ref } from "vue";

import BlogPagination from "@/views/home-page/components/BlogPagination.vue";
import { useWindowWidth } from "@/hooks/useWindowWidth.js";
import { getBlocksPage } from "@/api/blog.js";

const windowWidth = useWindowWidth();

const currentPage = ref(1);
const totalPages = ref(1);
const videosData = ref([]);

const videosPerPage = computed(() => {
  if (windowWidth.value > 1100) return 4;
  if (windowWidth.value > 750) return 3;
  return 2;
});

const displayedVideos = computed(() => {
  const startIndex = (currentPage.value - 1) * videosPerPage.value;
  const endIndex = startIndex + videosPerPage.value;
  return videosData.value.slice(startIndex, endIndex);
});

const handlePageChange = (page) => {
  currentPage.value = page;
};

onMounted(async () => {
  await getBlocksPage(1).then((res) => {
    videosData.value = res.data.posts;
    totalPages.value = res.data.total_pages;
  });
});

watch(currentPage.value, () => {});
</script>

<template>
  <section class="blog page-container" id="blog" v-if="videosData.length > 0">
    <h1>Блог</h1>
    <div class="blog-content">
      <div
        v-for="(video, index) in displayedVideos"
        :key="index"
        class="blog-video"
      >
        <video controls :src="video.src" />
        <p class="text-2">{{ video.title }}</p>
      </div>
    </div>

    <BlogPagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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

  @include variables.desktop {
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
