import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/home-page/HomeView.vue";
const routes = [
  {
    component: HomeView,
    path: "",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
