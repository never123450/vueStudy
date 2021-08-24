<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      //   isActive: true,
    };
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
