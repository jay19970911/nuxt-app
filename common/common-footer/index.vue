<template>
  <div class="common-footer-container middle-flex">
    <div class="copyright">
      Copyright
      <a-icon type="copyright" />
      {{copyright}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyright: '版权归个人所有，未经允许不得复制和转载'
    };
  }
};
</script>

<style lang="less" scoped>
.common-footer-container {
  height: 80px;
  border-top: 1px solid #dfdfdf;
  background: #f7f7f7;
  justify-content: center;
}
</style>