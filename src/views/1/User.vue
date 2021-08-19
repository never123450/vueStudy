<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息,嘿嘿嘿</p>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>

    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    userId() {
      return this.$route.params.userId;
    },
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    btnClick() {
      //所有的组件都继承自 Vue 类的原型
      console.log(this.$router);
      console.log(this.$route);
      console.log(this.name);
    },
  },
};
</script>

<style scoped></style>
