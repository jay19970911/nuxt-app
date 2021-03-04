<template>
  <div class="search-wrapper middle-flex">
    <input
      type="text"
      class="input"
      placeholder="请输入关键词"
      ref="input"
      v-model="text"
      @keyup.enter="submit"
    />
    <div class="close center-flex" @click="onClose">
      <img
        :style="{ opacity: text.length ? 1 : 0 }"
        src="../images/close.png"
        class="icon"
      />
    </div>
    <div class="btn flex" @click="submit">
      <a-icon type="search" class="iconfont"></a-icon>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
// import debounce from 'kuan-utils/lib/debounce';

export default {
  data() {
    return {
      text: ''
    };
  },
  methods: {
    onClose() {
      this.text = '';
    },
    submit() {
      this.$emit('fetch', { title: this.text, page: 1 });
      // this.$router.push({
      //   name: 'blog',
      //   query: { title: this.text }
      // });
    }
  }
};
</script>

<style lang='less' scoped>
.search-wrapper {
  margin: 10px;
  border: 1px solid rgba(224, 224, 224, 1);
  background: #fff;
  .input {
    flex: 1;
    height: 42px;
    padding: 0 13px;
    border: none;
    background-color: #ffffff;
    outline: none;
  }

  .btn {
    width: 78px;
    height: 42px;
    background: rgba(1, 133, 242, 1);
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #0075d6;
    }
    .icon-search {
      padding-right: 5px;
    }
  }
  .close {
    height: 42px;
    flex-shrink: 0;
    padding: 0 12px;
    background-color: #ffffff;
    cursor: pointer;
    .icon {
      width: 16px;
      height: 16px;
    }
  }
}
</style>