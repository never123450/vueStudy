import Vue from "vue";
// 路由配置相关信息
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";
const Home = () => import('../views/Home.vue');
const HomeNews = () => import('../views/HomeNews.vue');
const HomeMessage = () => import('../views/HomeMessage.vue');
const Profile = () => import('../views/Profile.vue');

// 通过Vue.use(插件),安装插件
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
      {
        path: '/profile',
        component: Profile
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
