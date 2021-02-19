<template>
  <div class="home-banner-container">
    <div class="swiper-image">
      <swiper
        ref="swiper"
        :options="options"
        @slideChange="change"
        class="swiper-container"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="cover" :style="{ backgroundImage: `url(${item.cover})` }"></div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="swiper-dots" v-if="list.length > 1">
      <div
        v-for="(item, i) in list"
        :key="i"
        class="dot"
        :class="{active: current === i}"
        @click="changeActive(i)"
      ></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      options: {
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        slidesPerView: '1',
        loop: true
      },
      current: 0,
      list: [
        {
          id: '1',
          cover: 'https://img1.halobear.com/wedding/FhFRj0bRIh86fjiqeuIKS9FHO8VW.jpeg'
        },
        {
          id: '2',
          cover: 'https://img1.halobear.com/wedding/FjzYgyHLCL1oFVE8ttE3XBmf2vzZ.jpeg'
        },
        {
          id: '3',
          cover: 'https://img1.halobear.com/wedding/Finf9fizOePFc3iLDyfUWTAdAori.jpeg'
        },
        {
          id: '4',
          cover: 'https://img1.halobear.com/wedding/Fv_q_7PIV6igNJQpHmJppf6Mq3s2.jpeg'
        }
      ]
    };
  },
  computed: {
    swiper() {
      return (this.$refs.swiper || {}).$swiper;
    }
  },
  methods: {
    change() {
      this.current = this.swiper.realIndex;
    },
    changeActive(i) {
      console.log(i, 444);
      this.swiper.slideTo(i + 1);
    }
  }
};
</script>

<style lang="less" scoped>
.home-banner-container {
  position: relative;
}
.swiper-slide {
  .cover {
    transform: scale3d(1, 1, 1);
    height: 830px;
    width: 100%;
    max-height: 830px;
    background-size: cover;
  }
}
.swiper-dots {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 5;
  .dot {
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.5;
    margin: 0 3px;
    transition: opacity 0.5s, width 0.3s;
    cursor: pointer;
    &.active {
      width: 20px;
      opacity: 1;
      border-radius: 4px;
    }
  }
}
</style>