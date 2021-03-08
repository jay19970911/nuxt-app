<template>
  <div class="home-container">
    <!-- 公共头部 -->
    <common-head ghost absolute />
    <!-- 首页banner -->
    <home-banner />
    <!-- 首页博客列表 -->
    <home-blog :blog="blog" />
    <!-- 参与项目 -->
    <home-project :project="project" />
    <!-- <mantle-mask v-model="visible" /> -->
    <!-- 公共底部 -->
    <common-footer />
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
// import MantleMask from '@/common/mantle-mask';
import HomeBanner from './components/home-banner';
import HomeBlog from './components/home-blog';
import HomeProject from './components/home-project';
import CommonFooter from '@/common/common-footer';
export default {
  components: {
    CommonHead,
    HomeBanner,
    HomeBlog,
    HomeProject,
    CommonFooter
    // MantleMask
  },
  props: {
    blog: {
      type: Array,
      default: () => []
    },
    project: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.home-container {
  background-color: #f4f6f8;
}
</style>