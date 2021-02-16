<template>
  <div class="common-head-outer" :class="{ absolute, fixed: isFixed }">
    <header
      class="common-header"
      :class="{ transparent: isTransparent, fixed: isFixed}"
    ></header>
  </div>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFixed: false
    };
  },
  computed: {
    isTransparent() {
      return this.transparent && !this.isFixed;
    }
  }
};
</script>

<style lang="less" scoped>
.common-head-outer {
  height: 80px;
  position: relative;
  z-index: 199;
  background: pink;
}
.common-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  animation: fadeInDown linear 0.3s;
}
</style>