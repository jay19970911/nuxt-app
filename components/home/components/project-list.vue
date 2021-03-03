<template>
  <div class="project-list flex">
    <div class="item" v-for="item in project" :key="item.id">
      <div class="card">
        <div
          class="card-title ellipsis hover-primary"
        >{{ item.name }}（{{ item.project_tag}}）</div>
        <div class="flex">
          <div class="cover-wrap">
            <img class="cover" :alt="item.name" :src="item.cover" />
          </div>
          <div class="card-info">
            <div class="flex1">
              <div class="content">{{ item.desc_info }}</div>
            </div>
            <div class="footer">
              <div class="cate">项目技术: {{ item.skill }}</div>
              <div class="time middle-flex">
                <img src="../images/time.png" class="icon" />
                <span>{{ item.created_at.split(' ')[0] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
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
.project-list {
  flex-wrap: wrap;
  .item {
    &:nth-child(2n) .card {
      margin-right: 0;
    }
  }
  .card {
    width: 636px;
    height: 269px;
    margin-right: 28px;
    margin-bottom: 30px;
    border-radius: 3px;
    background-color: #fff;
    padding: 30px;
    transform: translateY(0);
    box-sizing: border-box;
    color: #222;
    transition: box-shadow 0.3s, transform 0.3s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 9px 16px -4px rgba(0, 0, 0, 0.07);
      transform: translateY(-3px);
    }
  }
  .cover-wrap {
    width: 234px;
    height: 156px;
    overflow: hidden;
    border-radius: 3px;
    &:hover {
      opacity: 0.8;
    }
  }
  .cover {
    width: 100%;
    height: 100%;
    background-color: #eee;
    transition: transform 1s;
  }
  .card-title {
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    font-weight: 700;
    padding: 0 0 25px;
    box-sizing: content-box;
    &:hover {
      color: #0185f2;
    }
  }
  .card-info {
    padding-left: 30px;
    flex: 1;
    font-size: 14px;
    color: #666;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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