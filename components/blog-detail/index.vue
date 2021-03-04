<template>
  <div class="blog-detail-container">
    <common-head />
    <div class="blog-detail-box page">
      <div class="blog-detail-header">
        <!-- <div class="bread-crumb">博客列表 > 博文 > 博客详情</div> -->
        <head-crumb :list="crumbList" />
        <div class="blog-title">{{ data.title }}</div>
        <div class="text-info flex">
          <span class="text">时间：{{ data.date }}</span>
          <span class="line">|</span>
          <span class="text">热度：{{ data.views_num }}人浏览</span>
          <span class="line">|</span>
          <span class="text">分类: {{ data.cate_name }}</span>
        </div>
      </div>
      <div class="blog-conent flex">
        <!-- 博客内容区域 -->
        <div class="main-content">
          <div v-html="data.md"></div>
        </div>
      </div>
    </div>
    <common-footer />
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
import HeadCrumb from '@/common/head-crumb';
import CommonFooter from '@/common/common-footer';
export default {
  components: {
    CommonHead,
    HeadCrumb,
    CommonFooter
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      crumbList: [
        { label: '首页', to: { name: 'index' } },
        { label: '博客园', to: { name: 'blog' } },
        { label: '详情', to: {} }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.blog-detail-container {
  width: 100%;
  overflow: hidden;
  // background: #eff1f4;
  background: #f9f9f9;
}
.blog-detail-box {
  min-height: 90vh;
  padding: 0 0 60px;
}
.blog-detail-header {
  margin-bottom: 50px;
  .blog-title {
    font-size: 28px;
    font-weight: 600;
    color: #222;
    line-height: 40px;
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
      color: #666;
    }
  }
}
.blog-conent {
  .main-content {
    flex: 1;
    border: 1px solid #dfdfdf;
    padding: 40px 60px 40px;
    box-sizing: border-box;
    background: #fff;
  }
  .right-recommend {
    width: 500px;
    height: 300px;
    margin-left: 10px;
    border: 1px solid #dfdfdf;
    background: #fff;
  }
}
</style>