import { defineStore } from "pinia";
import { ref } from "vue";

export const useServicesStore = defineStore("services", () => {
    const servicesList = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    return {
        servicesList,
        isLoading,
        error,
    };
});
