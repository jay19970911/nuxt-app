<template>
  <blog :list="list" :payload.sync="payload" :total="total" @fetch="fetchData" />
</template>

<script>
import * as Api from '@/api/blog';

import Blog from '@/components/blog';

export default {
  components: {
    Blog
  },
  async asyncData({ query }) {
    const { page = 1, title = '' } = query;
    const per_page = 10;
    const data = await Api.list({ page, per_page, title });
    const { list = [], total } = data;
    return {
      payload: {
        page: Number(page),
        title,
        per_page
      },
      total,
      list
    };
  },
  methods: {
    async fetchData(query) {
      this.payload = { ...this.payload, ...query };
      const per_page = 10;
      const data = await Api.list(this.payload);
      const { list = [], total } = data;
      this.list = list;
      this.total = total;
    }
  }
};
</script>

<style>
</style>