<template>
  <div class="home-container">
    <!-- 公共头部 -->
    <common-head ghost absolute />
    <!-- 首页banner -->
    <home-banner />
    <!-- 自我介绍 -->
    <home-intro />
    <!-- 个人简介 -->
    <!-- 参与项目 -->
    <home-project />
    <!-- 公共底部 -->
    <common-footer />
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
import HomeBanner from './components/home-banner';
import HomeIntro from './components/home-intro';
import HomeProject from './components/home-project';
import CommonFooter from '@/common/common-footer';
export default {
  components: {
    CommonHead,
    HomeBanner,
    HomeIntro,
    HomeProject,
    CommonFooter
  }
};
</script>

<style>
</style>