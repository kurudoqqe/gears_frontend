import { defineStore } from "pinia";
import { ref } from "vue";

export const useTeamStore = defineStore("team", () => {
    const teamMembers = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    return {
        teamMembers,
        isLoading,
        error,
    };
});
