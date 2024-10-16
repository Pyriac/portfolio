import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
