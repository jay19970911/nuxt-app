<template>
  <div class="blogger-aside-container">
    <!-- 1、博主的个人信息 -->
    <blogger-info />
    <!-- 2、搜博主文章 -->
    <blog-search />
    <!-- 3、热门文章 -->
    <!-- 4、分类 -->
  </div>
</template>

<script>
import BloggerInfo from './blogger-info';
import BlogSearch from './blog-search';
export default {
  components: {
    BloggerInfo,
    BlogSearch
  }
};
</script>

<style lang="less" scoped>
.blogger-aside-container {
  width: 300px;
  margin-right: 10px;
}
</style>