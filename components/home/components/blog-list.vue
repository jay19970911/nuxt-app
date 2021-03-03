<template>
  <div class="article-list">
    <router-link
      :to="{name: 'blog-id',params: {id:item.id} }"
      class="link"
      v-for="item in blog"
      :key="item.id"
    >
      <div class="item">
        <div class="cover-wrap">
          <img class="cover" :alt="item.title" :src="item.cover" />
        </div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="flex1">
            <div class="content">{{ item.subtitle }}</div>
          </div>
          <div class="footer">
            <div class="cate">来自分类:{{ item.cate_name }}</div>
            <div class="time middle-flex">
              <img src="../images/time.png" class="icon" />
              <span>{{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.article-list {
  padding-bottom: 20px;
  .link {
    display: block;
    color: #323836;
  }
  .item {
    display: flex;
    height: 210px;
    padding: 20px 50px 20px 20px;
    box-sizing: border-box;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: #fafafa;
    }
    .title:hover {
      color: #0185f2;
    }
  }
  .cover-wrap {
    width: 260px;
    height: 170px;
    border-radius: 3px;
    margin-right: 30px;
    overflow: hidden;
  }
  .cover {
    width: 100%;
    height: 100%;
    background-color: #eee;
    transition: 1s;
  }
  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
  .title {
    font-size: 20px;
    line-height: 28px;
    max-height: 56px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .flex1 {
    flex: 1;
  }
  .content {
    color: #666666;
    font-size: 14px;
    line-height: 24px;
  }
  .footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999999;
    flex-wrap: wrap;
    .cate {
      display: inherit;
    }
  }
  .icon {
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }
}
</style>