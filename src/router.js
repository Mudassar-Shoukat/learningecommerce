import { createWebHistory, createRouter } from "vue-router";
import Main from "./Pages/Main.vue";
import ProductDetail from "./Pages/SingleProductDetail.vue";

const routes = [
  {
    name: "Main",
    path: "/",
    component: Main,
  },
  {
    name: "ProductDetail",
    path: "/product/:id",
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
