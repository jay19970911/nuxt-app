<template>
  <div class="head-crumb middle-flex">
    <div class="label">当前位置：</div>
    <div class="crumb-list middle-flex">
      <template v-for="(item,i) in list">
        <router-link
          class="item middle-flex"
          v-if="item.to"
          :to="item.to"
          :key="i"
        >
          <div class="text">{{ item.label}}</div>
          <div class="icon" v-if="i!=list.length-1" :key="i">
            <a-icon type="right" />
          </div>
        </router-link>
        <span v-else :key="i">
          <div class="text">{{ item.label}}</div>
          <div class="icon" v-if="i!=list.length-1" :key="i">
            <a-icon type="right" />
          </div>
        </span>
      </template>
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
  }
};
</script>

<style lang="less" scoped>
.head-crumb {
  font-size: 14px;
  font-weight: 400;
  color: #999;
  line-height: 20px;
  width: 1300px;
  margin: 20px auto;
  .item {
    color: #999;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>