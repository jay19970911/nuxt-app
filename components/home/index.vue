<template>
  <div class="home-container">
    <common-head />
    <home-content />
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
import HomeContent from './components/home-content';
export default {
  components: {
    CommonHead,
    HomeContent
  }
};
</script>

<style>
</style>