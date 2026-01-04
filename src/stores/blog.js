import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore("blog", () => {
    const videosData = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const isLoading = ref(false);
    const error = ref(null);

    return {
        currentPage,
        totalPages,
        videosData,
        isLoading,
        error,
    };
});
