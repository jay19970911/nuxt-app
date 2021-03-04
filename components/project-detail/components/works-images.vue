<template>
  <div class="works-images">
    <div class="head-title">
      <div class="title">作品图集</div>
    </div>
    <!-- 项目图片相册 -->
    <div class="images-wrap flex">
      <!-- 左侧显示图片区域 -->
      <div class="left-box">
        <img class="cover" :src="cover" />
      </div>
      <!-- 右侧图片列表 -->
      <div class="right-box">
        <div
          class="item"
          v-for="item in list"
          :key="item.id"
          @click="handleImage(item)"
        >
          <img class="cover" :src="item.cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: '1',
          cover:
            'https://img1.halobear.com/wedding/FuSnSEdnmxa5x50Ip3z22NCT5p8K.jpg?imageView2/2/w/504/h/360/interlace/1/q/75'
        },
        {
          id: '2',
          cover:
            'https://img1.halobear.com/wedding/FuvYIDxHkKKY4fZEGcC-HMjULrQl.jpg?imageView2/2/w/504/h/360/interlace/1/q/75'
        },
        {
          id: '3',
          cover:
            'https://img1.halobear.com/wedding/Ft4bmLMN51mgiM6uIJzEJfxeuFMJ.jpg?imageView2/2/w/504/h/360/interlace/1/q/75'
        },
        {
          id: '4',
          cover:
            'https://img1.halobear.com/wedding/Fgn5p4nyNkWraK9jaZVWHwbO66G0.jpg?imageView2/2/w/504/h/360/interlace/1/q/75'
        },
        {
          id: '5',
          cover:
            'https://img1.halobear.com/wedding/Fpzrz5sMozjvvbnYkh5cOIXI7ava.png?imageView2/2/w/504/h/360/interlace/1/q/75'
        },
        {
          id: '6',
          cover:
            'https://img1.halobear.com/wedding/FjGW_a8YF-6yG2s4Q4p4mb5qUfE3.jpg?imageView2/2/w/504/h/360/interlace/1/q/75'
        },
        {
          id: '7',
          cover:
            'https://img1.halobear.com/wedding/FrRoxoeOZF_Uxr6y2KbH2-0A2oD7.jpg?imageView2/2/w/504/h/360/interlace/1/q/75'
        }
      ],
      cover:
        'https://img1.halobear.com/wedding/FuSnSEdnmxa5x50Ip3z22NCT5p8K.jpg?imageView2/2/w/504/h/360/interlace/1/q/75'
    };
  },
  methods: {
    handleImage(item) {
      this.cover = item.cover;
    }
  }
};
</script>

<style lang="less" scoped>
.works-images {
  margin: 30px 0;
}
.head-title {
  padding-bottom: 10px;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #222;
    line-height: 25px;
  }
}
.images-wrap {
  padding: 20px;
  height: 600px;
  background: #fff;
  .left-box {
    flex: 1;
    margin-right: 20px;
    .cover {
      width: 100%;
      height: 100%;
    }
  }
  .right-box {
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    .item {
      width: 100%;
      height: 170px;
      margin-bottom: 10px;
      cursor: pointer;
      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
    }
    .cover {
      width: 100%;
      height: 100%;
    }
  }
}
</style>