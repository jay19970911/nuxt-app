<template>
  <div class="code-wrap">
    <div class="head-title">
      <div class="title">代码亮点</div>
    </div>
    <div class="code-content" v-html="data.introduce"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="less" scoped>
.head-title {
  padding-bottom: 10px;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #222;
    line-height: 25px;
  }
}
.code-content {
  border: 1px solid #dfdfdf;
  padding: 40px;
  box-sizing: border-box;
  background: #fff;
}
</style>