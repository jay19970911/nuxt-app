<template>
  <div class="blog-search-container">
    <a-input-search placeholder="搜博主文章" enter-button @search="onSearch" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSearch() {}
  }
};
</script>

<style lang="less" scoped>
.blog-search-container {
  margin: 10px 0;
  background: #fff;
  padding: 16px;
}
</style>