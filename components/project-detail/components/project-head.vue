<template>
  <div class="project-head">
    <!-- 项目的基本内容 -->
    <div class="head-info">
      <div class="bread-crumb">博客列表 > 博文 > 博客详情</div>
      <div class="title">幻熊科技 | {{ data.name }}</div>
      <div class="text-info flex">
        <span class="text">时间：{{ data.created_at.split(' ')[0] }}</span>
        <span class="line">|</span>
        <span class="text">分类: {{ data.skill }}</span>
      </div>
    </div>
    <!-- 我负责的模块 -->
    <div class="card">
      <div class="label">我的感悟</div>
      <div class="list">
        <div class="item">1、完成首页、灵感、金熊奖等模块的UI调整及BUG修复</div>
        <div class="item">2、完成首页、灵感、金熊奖等模块的UI调整及BUG修复</div>
        <div class="item">3、完成首页、灵感、金熊奖等模块的UI调整及BUG修复</div>
        <div class="item">4、完成首页、灵感、金熊奖等模块的UI调整及BUG修复</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
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
}
</style>