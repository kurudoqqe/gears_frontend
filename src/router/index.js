import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/layout/LayoutComponent.vue";
import HomeView from "../views/home-page/HomeView.vue";
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
