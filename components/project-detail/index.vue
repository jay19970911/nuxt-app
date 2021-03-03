<template>
  <div class="project-detail-container">
    <common-head />
    <!-- 项目详情内容 -->
    <div class="project-detail-wrap">
      <div class="page">
        <project-head />
      </div>
    </div>
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
import ProjectHead from './components/project-head';
export default {
  components: {
    CommonHead,
    ProjectHead
  }
};
</script>

<style lang="less" scoped>
.project-detail-container {
}
</style>