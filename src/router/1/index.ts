import Vue from "vue";
// 路由配置相关信息
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";
// const Home = () => import("../../views/1/Home.vue");
const HomeNews = () => import("../../views/1/HomeNews.vue");
// const HomeMessage = () => import("../../views/1/HomeMessage.vue");
// const Profile = () => import("../../views/1/Profile.vue");
const About = () => import("../../views/1/About.vue");
const User = () => import("../../views/1/User.vue");

// 通过Vue.use(插件),安装插件
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeNews,
    // children: [
    //   {
    //     path: '',
    //     redirect: 'news'
    //   },
    //   {
    //     path: 'news',
    //     component: HomeNews
    //   },
    //   {
    //     path: 'message',
    //     component: HomeMessage
    //   },
    //   {
    //     path: '/profile',
    //     component: Profile
    //   }
    // ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   meta: {
  //     title: '关于'
  //   },
  //   beforeEnter: (to, from, next) => {
  //     console.log('beforeEnter');
  //     next();
  //   },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../../views/1/About.vue"),
  // },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/user/:userId",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 前置守卫( guard )
router.beforeEach((to, from, next) => {
  // ${//to and from are Route Object,next() must be called to resolve the hook}
  // 从 from 跳转到 to
  // document.title = to.matched[0].meta.title;
  console.log(to);
  console.log("++++");
  next();
});

// 后置钩子( hook )
router.afterEach((to, from) => {
  // ${//these hooks do not get a next function and cannot affect the navigation}
  console.log("--------");
  console.log(to);
  console.log(from);
});

export default router;
