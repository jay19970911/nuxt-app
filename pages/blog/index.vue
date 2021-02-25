<template>
  <blog :list="list" />
</template>

<script>
import * as Api from '@/api/blog';

import Blog from '@/components/blog';

export default {
  components: {
    Blog
  },
  async asyncData() {
    const data = await Api.list();
    const { list = [] } = data;
    return {
      list
    };
  }
};
</script>

<style>
</style>