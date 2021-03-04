<template>
  <div class="home-project page">
    <div class="project-title">
      <div class="head-title">
        <h3 class="title">我的项目</h3>
      </div>
      <div class="cate-list"></div>
    </div>
    <!-- 我的项目 -->
    <project-list :project="project" />
  </div>
</template>

<script>
import ProjectList from './project-list';
export default {
  components: {
    ProjectList
  },
  props: {
    project: {
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
.home-project {
  padding: 80px 0;
}
.head-title {
  padding-bottom: 20px;
}
.title {
  font-weight: 600;
  color: #323038;
  line-height: 40px;
  font-size: 20px;
}
</style>