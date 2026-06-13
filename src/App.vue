<template>
  <div class="title">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.title {
  color: @color[primary];
}
</style>
