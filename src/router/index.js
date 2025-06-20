import { createWebHistory, createRouter } from "vue-router";

import Layout from "../components/layout/LayoutComponent.vue";
import HomeView from "../views/home-page/HomeView.vue";
const routes = [
  {
    children: [
      {
        component: HomeView,
        path: "",
      },
    ],
    component: Layout,
    path: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
