import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/project/:name",
    component: ProjectDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
