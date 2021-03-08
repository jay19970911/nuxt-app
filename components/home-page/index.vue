<template>
  <div class="home-page-container">
    <common-head />
    <div class="home-page-content page">
      <!-- 自我介绍 -->
      <div class="introduce-wrap middle-flex">
        <!-- 头像 -->
        <div class="avatar-box">
          <img
            src="https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg"
            class="avatar"
            alt
          />
        </div>
        <div class="user">
          <div class="username">张三</div>
          <div class="user-text">新晋Web前端，本科网络工程专业，1年工作经验</div>
        </div>
        <div class="user-intro">
          <!-- 详细介绍 -->
          <p>90后，宅男；爱生活，爱探索，爱思考，善于学习，对各种技术课程都有浓厚都兴趣。</p>
          <p>毕业院校：淮南师范学院</p>
          <p>手机号码：17355450192</p>
          <p>政治面貌：党员</p>
        </div>
      </div>
      <!-- 我的履历 -->
      <div class="resume-wrap pd">
        <div class="text">我的履历</div>
        <div class="resume-list">
          <div class="item flex" v-for="item in list" :key="item.id">
            <div class="date">{{ item.date }}</div>
            <div class="right-info">
              <div class="company-info flex">
                <div class="company">{{ item.company }}</div>
                <div class="position">{{ item.position }}</div>
              </div>
              <div class="content flex">
                <p>1、产品策划及开发</p>
                <p>2、管理并协调新品开发过程中产品部、技术部等相关部门之间的协调合作</p>
                <p>3、指定产品策略与蓝图</p>
                <p>4、提供深入的市场分析、行业分析、竞品分析，并对产品定位</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 技术方面介绍 -->
      <div class="skill-wrap pd">
        <div class="text">技术介绍</div>
        <div class="content flex">
          <p>1、产品策划及开发</p>
          <p>2、管理并协调新品开发过程中产品部、技术部等相关部门之间的协调合作</p>
          <p>3、指定产品策略与蓝图</p>
          <p>4、提供深入的市场分析、行业分析、竞品分析，并对产品定位</p>
          <p>5、提供深入的市场分析、行业分析、竞品分析，并对产品定位</p>
          <p>6、提供深入的市场分析、行业分析、竞品分析，并对产品定位</p>
        </div>
      </div>
      <!-- 自我评价 -->
      <div class="evaluate-wrap pd">
        <div class="text">自我评价</div>
        <div class="content flex">
          <p>1、产品策划及开发</p>
          <p>2、管理并协调新品开发过程中产品部、技术部等相关部门之间的协调合作</p>
          <p>3、指定产品策略与蓝图</p>
          <p>4、提供深入的市场分析、行业分析、竞品分析，并对产品定位</p>
          <p>5、提供深入的市场分析、行业分析、竞品分析，并对产品定位</p>
          <p>6、提供深入的市场分析、行业分析、竞品分析，并对产品定位</p>
        </div>
      </div>
    </div>
    <common-footer />
  </div>
</template>

<script>
import CommonHead from '@/common/common-head';
import CommonFooter from '@/common/common-footer';
export default {
  components: {
    CommonHead,
    CommonFooter
  },
  data() {
    return {
      list: [
        {
          id: '1',
          date: '2018年6月-2020年5月',
          company: '上海稻收科技有限公司',
          position: 'web前端开发工程师'
        },
        {
          id: '2',
          date: '2018年6月-2020年5月',
          company: '上海稻收科技有限公司',
          position: 'web前端开发工程师'
        },
        {
          id: '3',
          date: '2018年6月-2020年5月',
          company: '上海稻收科技有限公司',
          position: 'web前端开发工程师'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home-page-container {
  width: 100%;
  background: #f9f9f9;
}
.home-page-content {
  padding: 80px 0 40px;
  .introduce-wrap {
    border: 1px solid #dfdfdf;
    margin-bottom: 20px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 80px 0 30px;
    .avatar-box {
      position: absolute;
      left: 50%;
      top: -50px;
      transform: translateX(-50%);
      width: 100px;
      height: 100px;
      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
  .text {
    font-size: 28px;
    font-weight: 600;
    color: #323038;
    line-height: 40px;
    padding-bottom: 30px;
  }
  .pd {
    border: 1px solid #dfdfdf;
    margin-bottom: 20px;
    padding: 40px 60px;
    .item {
      margin-bottom: 20px;
    }
    .date {
      width: 300px;
      margin-right: 66px;
      font-size: 18px;
      font-weight: 700;
      color: #222;
    }
    .company-info {
      font-size: 18px;
      font-weight: 700;
      color: #222;
      .company {
        margin-right: 80px;
      }
    }
    .content {
      flex-wrap: wrap;
      font-size: 14px;
      color: #999;
      line-height: 30px;
      p {
        width: 100%;
      }
    }
  }
}
</style>