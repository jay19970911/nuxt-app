<template>
  <div class="project-wrap page">
    <div class="project-list flex">
      <router-link
        :to="{name: 'project-id',params: { id:item.id}}"
        class="item"
        v-for="item in list"
        :key="item.id"
      >
        <div class="card">
          <div class="cover-outer">
            <img :src="item.cover" :alt="item.name" class="cover" />
          </div>
          <div class="card-info">
            <div class="name">{{ item.name }}</div>
            <div class="item-footer flex">
              <div class="skill">{{ item.skill }}</div>
              <div class="tool">{{ item.tool }}</div>
            </div>
          </div>
          <div class="cate">{{ item.project_tag }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.project-wrap {
  min-height: 80vh;
}
.project-list {
  flex-wrap: wrap;
  .item {
    &:nth-of-type(4n) .card {
      margin-right: 0;
    }
  }
}
.card {
  width: 304px;
  height: 280px;
  margin-right: 28px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
  transform: translateY(0);
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 9px 16px -4px rgba(0, 0, 0, 0.07);
    transform: translateY(-3px);
  }
}
.card-info {
  .name {
    font-size: 14px;
    font-weight: 700;
    padding: 12px 20px 10px;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    &:hover {
      color: #0185f2;
    }
  }
  .item-footer {
    padding: 0 20px;
    color: #999;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.cover-outer {
  height: 202px;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
  &:hover {
    opacity: 0.8;
  }
  .cover {
    width: 100%;
    height: 202px;
    background-color: #eee;
    transition: transform 1s;
  }
}
.cate {
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 4px 6px;
  border-radius: 4px;
}
</style>