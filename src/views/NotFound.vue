<template>
  <div class="no-page">
    <div title="404">404</div>
    <p :class="$content.text">Page Not Found</p>
  </div>
</template>

<script>
import $content from "../styles/common.module.less";
export default {
  name: "NotFound",
  data() {
    return {};
  },
  computed: {
    $content() {
      return $content;
    },
  },
};
</script>

<style scoped lang="less">
.no-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100vh;
  background-color: #242424;
  max-width: 1940px;
}
div {
  display: flex;
  color: #fff;
  font-size: 96px;
  font-family: "Fira Mono", monospace;
  letter-spacing: -7px;
  &::before,
  &::before {
    clip-path: polygon(0 0, @pct100 0, @pct100 @pct33, 0 @pct33);
  }
  &::after {
    clip-path: polygon(0 @pct67, @pct100 @pct67, @pct100 @pct100, 0 @pct100);
  }
}
</style>
