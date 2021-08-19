import Vue from "vue";
import App from "./views/1/App.vue";
import router from "./router/1";
import store from "./store";

Vue.config.productionTip = false;
console.log("44444", router);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
