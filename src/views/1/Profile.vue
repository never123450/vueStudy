<template>
  <div>
    <h2>我是 Profile 组件</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    console.log("created");
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  destroyed() {
    console.log("destroyed");
  },
};
</script>
<style scoped></style>
