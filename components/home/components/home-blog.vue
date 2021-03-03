<template>
  <div class="home-blog-container">
    <div class="home-blog page">
      <div class="left-box">
        <div class="head-title">
          <h3 class="title">最新博客</h3>
        </div>
        <!-- blog列表 -->
        <blog-list :blog="blog" />
      </div>
      <!-- 右侧的区域 -->
    </div>
  </div>
</template>

<script>
import BlogList from './blog-list';
export default {
  components: {
    BlogList
  },
  props: {
    blog: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.home-blog-container {
  // background: #eff1f4;
  background: #fff;
}
.home-blog {
  padding: 80px 0;
}
.left-box {
  .head-title {
    padding-left: 20px;
  }
  .title {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>