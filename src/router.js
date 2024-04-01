import { createWebHistory, createRouter } from "vue-router";
import Main from "./Pages/Main.vue";



const routes = [
  {
    name: "Main",
    path: "/",
    component: Main,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
