<template>
  <div>
    <div v-html="data.md"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>