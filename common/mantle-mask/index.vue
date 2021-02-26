<template>
  <div class="kf-container">
    <div class="kf-mask" @click="toShowMask" :class="{active: !dataVisible}">
      <div class="kf-box">
        <img
          src="https://img1.halobear.com/wedding/FifvZlpspmXQFyXXeMgqg3exvxnc.png"
          class="kf-cover"
          alt
        />
        <div class="footer-info">
          <div class="text">获取报价</div>
          <img
            src="https://img1.halobear.com/wedding/Fk8qFd2slIYJK6aAEswEMeQd7vdG.png"
            class="more-icon"
            alt
          />
        </div>
      </div>
    </div>
    <div class="mask-wrap" :class="{hide: !dataVisible}" ref="mask1">
      <div class="mask-container page">
        <img
          class="icon"
          @click="delMask"
          src="https://img1.halobear.com/wedding/FuqDVU0z6CnbgczIYx-49RDmgsP6.png"
          alt
        />
        <div class="l">
          <img
            src="https://img1.halobear.com/wedding/FifvZlpspmXQFyXXeMgqg3exvxnc.png"
            class="butler-icon"
            alt
          />
          <div class="info">
            <div class="title">想了解更多旅行婚礼的个性化定制服务？</div>
            <div class="subtitle">全国已有 {{num}} 位新人咨询礼成平台顾问</div>
          </div>
        </div>
        <div class="input">
          <input
            type="number"
            placeholder="请输入手机号码"
            class="tel-num"
            v-model="phone"
            ref="phone"
          />
          <button class="btn">立即获取</button>
        </div>
        <div class="scan">
          <img
            src="https://img1.halobear.com/wedding/FubImW6A4Fmr-Zg_yQ7Ks3yDr3Uv.png"
            class="phone-icon"
            alt
          />
          <div class="scan-info">
            <div class="wx">微信扫一扫</div>
            <div class="xcx">快速体验礼成小程序</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible() {
      this.dataVisible = this.visible;
    }
  },
  data() {
    return {
      dataVisible: this.visible,
      phone: '',
      num: 32931
    };
  },
  methods: {
    delMask() {
      this.dataVisible = false;
    },
    toShowMask() {
      this.dataVisible = true;
    }
  }
};
</script>

<style lang="less" scoped>
.kf-mask {
  width: 88px;
  height: 120px;
  background: #323038;
  display: flex;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 21;
  transform: translateX(-200px);
  &.active {
    transition: transform 0.75s ease 0.5s;
    transform: translateX(0);
  }
  .kf-cover {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  .footer-info {
    display: flex;
    align-items: center;
    padding-top: 6px;
    .text {
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
      line-height: 20px;
      padding-right: 2px;
    }
    .more-icon {
      width: 10px;
      height: 10px;
    }
  }
}
.mask-wrap {
  width: 100%;
  height: 120px;
  background: rgba(50, 48, 56, 0.79);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  transition: transform 0.75s ease-in-out;
  &.hide {
    transform: translateX(-100%);
  }
}
.mask-container {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l {
    display: flex;
  }
  .butler-icon {
    width: 64px;
    height: 64px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    padding-left: 16px;
    .title {
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
    }
    .subtitle {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      padding-top: 4px;
    }
  }
  .input {
    display: flex;
    align-items: center;
  }
  .icon {
    position: absolute;
    top: 12px;
    right: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  .scan {
    display: flex;
    .phone-icon {
      width: 130px;
      height: 130px;
    }
    .scan-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      line-height: 24px;
      padding-left: 26px;
    }
  }
}
.tel-num {
  width: 320px;
  height: 48px;
  padding: 0 20px;
  outline: none;
  border: none;
  // 去除type为number的input后面的添加和减少按钮图标
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
}
.btn {
  width: 120px;
  height: 48px;
  background: #e03e5d;
  outline: none;
  border: none;
  line-height: 48px;
  text-align: center;
  cursor: pointer;
  margin-left: 6px;
  color: #fff;
  &:hover {
    background: #ca3b56;
  }
}
</style>