<template>
  <div class="project-container">
    <common-head />
    <div class="project-content">
      <head-crumb :list="crumbList"></head-crumb>
      <project-list :list="list" />
    </div>
    <common-footer />
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
import HeadCrumb from '@/common/head-crumb';
import CommonFooter from '@/common/common-footer';

import ProjectList from './components/project-list';
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CommonHead,
    HeadCrumb,
    ProjectList,
    CommonFooter
  },
  data() {
    return {
      crumbList: [
        { label: '首页', to: { name: 'index' } },
        { label: '项目列表', to: { name: 'project' } }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.project-container {
  background: #f9f9f9;
  min-height: 100vh;
}
</style>