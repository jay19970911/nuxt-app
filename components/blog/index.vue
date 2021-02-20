<template>
  <div class="blog-container">
    <common-head />
    <div class="banner-container middle-flex">
      <div class="text page">
        <div class="user">HJay_Chou的博客</div>
        <div class="occupation">前端</div>
      </div>
    </div>
    <blog-content :list="list" />
    <common-footer />
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
import BlogContent from './components/blog-content';
import CommonFooter from '@/common/common-footer';
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CommonHead,
    BlogContent,
    CommonFooter
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.banner-container {
  background: url('https://img1.halobear.com/wedding/Fo7SlQDDOaTEJpiXnHL66w-505Bw.png') no-repeat
    center;
  background-size: cover;
  width: 100%;
  height: 100px;
  .text {
    color: #fff;
    .user {
      font-size: 24px;
    }
    .occupation {
      color: #b8b8b8;
      font-size: 14px;
    }
  }
}
</style>