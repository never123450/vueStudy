import Vue from "vue";
// 路由配置相关信息
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

const Home = () => import("../../views/2/home/home.vue");
const Category = () => import("../../views/2/category/category.vue");
const Cart = () => import("../../views/2/cart/cart.vue");
const Profile = () => import("../../views/2/profile/profile.vue");
// 通过Vue.use(插件),安装插件
Vue.use(VueRouter);

// 创建路由对象
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routes: Array<any> = [
  {
    path: "/2/category",
    component: Category,
  },
  {
    path: "/2/cart",
    component: Cart,
  },
  {
    path: "/2/profile",
    component: Profile,
  },
  {
    path: "/2/home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 导出 router
export default router;
