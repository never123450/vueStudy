<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="'/user/' + userId">用户</router-link> |
      <!-- <router-link
        :to="{ path: '/profile', query: { name: 'why', age: 11, height: 1.9 } }"
        >档案</router-link
      > -->
      <button @click="userClick">用户</button>
      <button @click="profileClick">档案</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "APP",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      userId: "xwy",
      imgURL: "http://www.baidu.com.logo.png",
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // push => pushState
      // this.$router.push('/home')
      this.$route.replace("/home");
      console.log("homeClick");
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    aboutClick() {
      // $router.push('/about');
      this.$router.replace("/about");
      console.log("aboutClick");
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kobe",
          age: 11,
          height: 1.9,
        },
      });
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
