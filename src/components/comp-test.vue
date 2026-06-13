<template>
  <div :class="[$common.flex, $common.itemCenter]">
    <div>测试组件</div>
    <div>测试组件</div>
  </div>
</template>

<script>
import $common from "../styles/common.module.less";

export default {
  data() {
    return {
      $common,
    };
  },
};
</script>
