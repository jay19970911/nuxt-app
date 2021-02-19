<template>
  <div class="blog-list-container">
    <div class="page flex">
      <!-- 左侧的博主个人信息 -->
      <blogger-aside />
      <!-- 中间的列表内容区 -->
      <div class="blog-list-content">
        <div class="blog-item" v-for="item in list" :key="item.id">
          <div class="title">{{item.title}}</div>
          <div class="content flex">
            <img :src="item.cover" alt class="cover" />
            <div class="text">{{item.subtitle}}</div>
          </div>
          <div class="info flex">
            <div class="date">{{item.date}}</div>
            <div class="likes-num">
              <a-icon type="like" />
              {{item.likes}}
            </div>
            <div class="comments-num">
              <a-icon type="message" />
              {{item.comments}}
            </div>
            <div class="views-num">
              <a-icon type="eye" />
              {{item.views_num}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BloggerAside from './blogger-aside';
export default {
  components: {
    BloggerAside
  },
  data() {
    return {
      list: [
        {
          id: '1',
          title: 'jQuery实现tab选项卡切换',
          subtitle: '如何使用jQuery实现tab选项卡切换',
          cover: 'https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg',
          date: '2019-09-21 11:53:12',
          views_num: 1362,
          comments: 20,
          likes: 100
        },
        {
          id: '2',
          title: 'jQuery实现tab选项卡切换',
          subtitle: '如何使用jQuery实现tab选项卡切换',
          cover: 'https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg',
          date: '2019-09-21 11:53:12',
          views_num: 1362,
          comments: 20,
          likes: 100
        },
        {
          id: '3',
          title: 'jQuery实现tab选项卡切换',
          subtitle: '如何使用jQuery实现tab选项卡切换',
          cover: 'https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg',
          date: '2019-09-21 11:53:12',
          views_num: 1362,
          comments: 20,
          likes: 100
        },
        {
          id: '4',
          title: 'jQuery实现tab选项卡切换',
          subtitle: '如何使用jQuery实现tab选项卡切换',
          cover: 'https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg',
          date: '2019-09-21 11:53:12',
          views_num: 1362,
          comments: 20,
          likes: 100
        },
        {
          id: '5',
          title: 'jQuery实现tab选项卡切换',
          subtitle: '如何使用jQuery实现tab选项卡切换',
          cover: 'https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg',
          date: '2019-09-21 11:53:12',
          views_num: 1362,
          comments: 20,
          likes: 100
        },
        {
          id: '6',
          title: 'jQuery实现tab选项卡切换',
          subtitle: '如何使用jQuery实现tab选项卡切换',
          cover: 'https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg',
          date: '2019-09-21 11:53:12',
          views_num: 1362,
          comments: 20,
          likes: 100
        },
        {
          id: '7',
          title: 'jQuery实现tab选项卡切换',
          subtitle: '如何使用jQuery实现tab选项卡切换',
          cover: 'https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg',
          date: '2019-09-21 11:53:12',
          views_num: 1362,
          comments: 20,
          likes: 100
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.blog-list-container {
  background: #f9f9f9;
  padding-bottom: 80px;
}
.blog-list-content {
  padding: 30px;
  background: #fff;
  flex: 1;
  .blog-item {
    margin-bottom: 20px;
    padding: 10px;
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