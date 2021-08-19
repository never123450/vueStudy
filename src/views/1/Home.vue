<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import HomeNews from "@components/HomeNews.vue";
import HomeMessage from "@components/HomeMessage.vue";

@Component({
  components: {
    HelloWorld,
    HomeNews,
    HomeMessage,
  },
})
export default class Home extends Vue {}
</script>
