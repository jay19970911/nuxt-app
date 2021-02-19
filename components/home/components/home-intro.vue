<template>
  <div class="home-intro-wrap page">
    <div class="title-box middle-flex">
      <div class="title">我</div>
      <div class="text">Yes It Is Me</div>
    </div>
    <div class="intro-box">
      <!-- 头像 -->
      <div class="avatar-box">
        <img
          src="https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg"
          class="cover"
          alt
        />
      </div>
      <!-- 姓名 + 专业 + 工作经验 -->
      <div class="user-info">
        <div class="username">张三</div>
        <div class="usertext">新晋Web前端，本科网络工程专业，1年工作经验</div>
      </div>
      <!-- 详细介绍 -->
      <div class="detailed">
        <p>90后，宅男；爱生活，爱探索，爱思考，善于学习，对各种技术课程都有浓厚都兴趣。</p>
        <p>毕业院校：淮南师范学院</p>
        <p>手机号码：17355450192</p>
        <p>政治面貌：党员</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home-intro-wrap {
  padding-top: 80px;
  .title-box {
    height: 100px;
    background: rgba(0, 0, 0, 0.7);
    flex-direction: column;
    justify-content: center;
    .title {
      font-size: 20px;
      color: #fff;
      font-weight: 500;
    }
    .text {
      color: #999aaa;
      font-size: 16px;
    }
  }
  .intro-box {
    width: 100%;
    height: 440px;
    background: pink;
    padding: 60px 0;
    text-align: center;
    .avatar-box {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      .cover {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-info {
      color: #fff;
      margin: 6px 0;
      .username {
        font-size: 24px;
        font-weight: 600;
      }
      .usertext {
        font-size: 14px;
      }
    }
    .detailed {
      color: #fff;
      font-size: 16px;
      margin-top: 40px;
      p {
        margin-bottom: 10px;
      }
    }
  }
}
</style>