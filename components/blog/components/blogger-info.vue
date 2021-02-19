<template>
  <div class="blogger-info">
    <div class="info-intro flex">
      <div class="avatar-box">
        <img
          src="https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg"
          alt
        />
      </div>
      <div class="user-info">
        <div class="username">伦为JAY下囚</div>
        <div class="num">码龄2年</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="data-info flex">
      <dl class="text-center middle-flex">
        <dt class="count">12</dt>
        <dd>原创</dd>
      </dl>
      <dl class="text-center middle-flex">
        <dt class="count">12</dt>
        <dd>访问</dd>
      </dl>
      <dl class="text-center middle-flex">
        <dt class="count">12</dt>
        <dd>获赞</dd>
      </dl>
      <dl class="text-center middle-flex">
        <dt class="count">12</dt>
        <dd>评论</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.blogger-info {
  padding-bottom: 10px;
  background: #fff;
}
.info-intro {
  padding: 16px 16px 6px 16px;
  .avatar-box {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .username {
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      color: #fc5531;
    }
  }
  .num {
    color: #999aaa;
    font-size: 13px;
  }
}
.line {
  width: 268px;
  height: 1px;
  background: #f5f6f7;
  margin: 10px auto;
}
.data-info {
  padding: 9px 10px;
  justify-content: space-between;
  .text-center {
    flex: 1;
    flex-direction: column;
    .count {
      line-height: 22px;
    }
    dd {
      color: #999aaa;
      font-size: 14px;
      line-height: 22px;
      padding: 3px 0;
    }
  }
}
</style>