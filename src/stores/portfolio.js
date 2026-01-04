import { defineStore } from "pinia";
import { ref } from "vue";

export const usePortfolioStore = defineStore("portfolio", () => {
    const portfolioList = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    return {
        portfolioList,
        isLoading,
        error,
    };
});
