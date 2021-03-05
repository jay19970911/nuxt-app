<template>
  <div class="project-head">
    <!-- 项目的基本内容 -->
    <div class="head-info">
      <div class="bread-crumb">
        <head-crumb :list="crumbList"></head-crumb>
      </div>
      <div class="title">幻熊科技 | {{ data.name }}</div>
      <div class="text-info flex">
        <span class="text">时间：{{ data.created_at.split(' ')[0] }}</span>
        <span class="line">|</span>
        <span class="text">分类: {{ data.skill }}</span>
      </div>
    </div>
    <!-- 我负责的模块 -->
    <div class="card">
      <div class="label">负责模块</div>
      <pre class="item">{{ data.modules }}</pre>
    </div>
  </div>
</template>

<script>
import HeadCrumb from '@/common/head-crumb';
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    HeadCrumb
  },
  data() {
    return {
      crumbList: [
        { label: '首页', to: { name: 'index' } },
        { label: '项目列表', to: { name: 'project' } },
        { label: '项目详情', to: {} }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.project-head {
  padding: 20px 0;
}
.head-info {
  width: 100%;
  padding: 20px 40px;
  background: #fff;
  border: 1px solid #dfdfdf;
  .bread-crumb {
    font-size: 14px;
    font-weight: 400;
    color: #999;
    line-height: 20px;
    width: 1300px;
  }
  .title {
    font-size: 28px;
    font-weight: 600;
    color: #222;
    line-height: 40px;
    margin-top: 10px;
  }
  .text-info {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #666;
    line-height: 20px;
    .line {
      color: #dfdfdf;
      margin: 0 9px;
    }
    .text {
      color: #323038;
    }
  }
}
.card {
  width: 100%;
  background: #fff;
  border: 1px solid #dfdfdf;
  padding: 20px 40px;
  margin: 20px 0;
  .label {
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #222;
    line-height: 25px;
  }
}
</style>