<template>
  <tab-bar>
    <tab-bar-item path="/2/home" activeColor="pink">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/2/category" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/2/cart" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/cart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/cart_active.svg"
        alt=""
      />

      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/2/profile" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar.vue";
import TabBarItem from "@/components/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: { TabBar, TabBarItem },
};
</script>

<style scoped></style>
