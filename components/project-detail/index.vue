<template>
  <div class="project-detail-container">
    <common-head />
    <!-- 项目详情内容 -->
    <div class="project-detail-wrap">
      <div class="page">
        <project-head :data="data" />
        <div class="content-box">
          <!-- 产品介绍 -->
          <div class="intro-text">
            <div class="title">产品介绍</div>
            <div class="text">{{ data.desc_info }}</div>
          </div>
          <!-- 作品图集 -->
          <works-images />
          <!-- 代码亮点 -->
          <code-highlights :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
import ProjectHead from './components/project-head';
import WorksImages from './components/works-images';
import CodeHighlights from './components/code-highlights';
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    CommonHead,
    ProjectHead,
    WorksImages,
    CodeHighlights
  },
  mounted() {
    console.log(this.data, 9);
  }
};
</script>

<style lang="less" scoped>
.project-detail-wrap {
  background: #f9f9f9;
  padding: 20px 0 80px;
}
.title {
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #222;
  line-height: 25px;
}
.text {
  padding: 20px;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #dfdfdf;
  line-height: 30px;
}
</style>