<template>
  <div class="blog-list-container">
    <div class="page flex">
      <!-- 左侧的博主个人信息 -->
      <div class="blog-aside">
        <blogger-info />
        <blog-search @fetch="$emit('fetch', $event)" />
      </div>
      <!-- 中间的列表内容区 -->
      <div class="blog-list-content" v-if="list.length">
        <router-link
          :to="{name: 'blog-id',params: {id:item.id} }"
          class="blog-item"
          v-for="item in list"
          :key="item.id"
        >
          <div class="title">{{item.title}}</div>
          <div class="content flex">
            <img :src="item.cover" alt class="cover" />
            <div class="text">{{item.subtitle}}</div>
          </div>
          <div class="info flex">
            <div class="date">{{item.date}}</div>
            <div class="likes-num">
              <a-icon type="like" />
              {{item.likes_num}}
            </div>
            <div class="comments-num">
              <a-icon type="message" />
              {{item.contents_num}}
            </div>
            <div class="views-num">
              <a-icon type="eye" />
              {{item.views_num}}
            </div>
          </div>
        </router-link>
        <div class="pagination">
          <my-pagination
            :total="total"
            :payload.sync="payload"
            @change="changePage"
          ></my-pagination>
        </div>
      </div>
      <div class="blank-box" v-else>
        <Blank />
      </div>
    </div>
  </div>
</template>

<script>
import BloggerInfo from './blogger-info';
import BlogSearch from './blog-search';
import Blank from '@/common/blank';
import MyPagination from '@/common/MyPagination';
export default {
  components: {
    BloggerInfo,
    BlogSearch,
    Blank,
    MyPagination
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    payload: {
      type: Object,
      default: () => ({})
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      p: { ...this.payload }
    };
  },
  methods: {
    changePage(fixData = {}) {
      console.log(21);
      const payload = { ...this.p, ...fixData };
      this.$emit('fetch', payload);
    }
  }
};
</script>

<style lang="less" scoped>
.blog-list-container {
  background: #f9f9f9;
  padding-bottom: 80px;
  min-height: 80vh;
}
.blog-aside {
  margin-right: 20px;
}
.blank-box {
  width: 100%;
}
.blog-list-content {
  padding: 30px;
  background: #fff;
  min-height: 80vh;
  flex: 1;
  .blog-item {
    margin-bottom: 20px;
    padding: 10px;
    display: block;
    color: #303238;
    border-bottom: 1px solid #f6f6f6;
    &:hover {
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    }
    .title {
      font-weight: 500;
      font-size: 25px;
      line-height: 25px;
    }
    .content {
      margin: 15px 0;
    }
    .info {
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
    .cover {
      width: 52px;
      height: 52px;
      margin-right: 6px;
    }
  }
}
</style>