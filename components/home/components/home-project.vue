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
    <div class="read-more-btn">
      <router-link :to="{ name: 'project'}" class="more-btn">查看更多项目</router-link>
    </div>
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
.more-btn {
  width: 210px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: #0185f2;
  color: #fff;
  margin: 10px auto 0;
  border-radius: 3px;
}
</style>