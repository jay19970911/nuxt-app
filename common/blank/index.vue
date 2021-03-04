<template>
  <div class="blank-container">
    <img :src="src" alt="img" />
    <div class="tips">{{ tip }}</div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: require('./blank.png')
    },
    tip: {
      type: String,
      default: '抱歉，没有找到符合条件的内容'
    }
  }
};
</script>

<style lang="less" scoped>
.blank-container {
  min-height: 60vh;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  text-align: center;
  font-size: 14px;
  color: #666;
}
.img {
  max-width: 100%;
  width: 160px;
  display: block;
  margin: 0 auto;
  pointer-events: none;
  padding-bottom: 20px;
}
</style>