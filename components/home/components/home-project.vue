<template>
  <div class="home-project page">
    <div class="project-title">参与项目</div>
    <div class="project-list flex">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="card">
          <div class="cover-outer">
            <img :src="item.cover" class="cover" alt />
          </div>
          <div class="info">
            <div class="name">{{item.name}}</div>
            <div class="skill">{{item.skill}}</div>
          </div>
          <div class="tag">{{item.tag}}</div>
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
          name: '运维管理后台',
          cover: 'https://img1.halobear.com/wedding/FlaxJpftJbob7cPLCccFY_4K8Esz.jpg',
          tag: '后台管理系统',
          skill: 'vue+antd-vue'
        },
        {
          id: '2',
          name: '运维管理后台',
          cover: 'https://img1.halobear.com/wedding/FlaxJpftJbob7cPLCccFY_4K8Esz.jpg',
          tag: '后台管理系统',
          skill: 'vue+antd-vue'
        },
        {
          id: '3',
          name: '运维管理后台',
          cover: 'https://img1.halobear.com/wedding/FlaxJpftJbob7cPLCccFY_4K8Esz.jpg',
          tag: '后台管理系统',
          skill: 'vue+antd-vue'
        },
        {
          id: '4',
          name: '运维管理后台',
          cover: 'https://img1.halobear.com/wedding/FlaxJpftJbob7cPLCccFY_4K8Esz.jpg',
          tag: '后台管理系统',
          skill: 'vue+antd-vue'
        },
        {
          id: '5',
          name: '运维管理后台',
          cover: 'https://img1.halobear.com/wedding/FlaxJpftJbob7cPLCccFY_4K8Esz.jpg',
          tag: '后台管理系统',
          skill: 'vue+antd-vue'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home-project {
  padding: 80px 0;
}
.project-title {
  font-size: 28px;
  font-weight: 600;
  color: #323038;
  line-height: 40px;
  padding-bottom: 30px;
}
.project-list {
  flex-wrap: wrap;
  .item {
    margin-right: 20px;
    margin-bottom: 20px;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  .card {
    width: 420px;
    height: 338px;
    position: relative;
    &:hover {
      .cover {
        transform: scale(1.1);
      }
    }
    .cover-outer {
      height: 280px;
      overflow: hidden;
    }
    .cover {
      width: 100%;
      height: 280px;
      transition: transform 0.5s;
    }
    .info {
      padding: 12px 0;
      .name {
        font-size: 16px;
        font-weight: 600;
        color: #323038;
      }
      .skill {
        font-size: 14px;
        font-weight: 400;
        color: #68676c;
        line-height: 20px;
        padding: 4px 0;
      }
    }
    .tag {
      position: absolute;
      left: 0;
      top: 0;
      background: #323038;
      font-size: 12px;
      font-weight: 500;
      color: #fff;
      padding: 2px 7px;
    }
  }
}
</style>