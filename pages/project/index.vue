<template>
  <project :list="list" />
</template>

<script>
import * as Api from '@/api/project';

import Project from '@/components/project';
export default {
  components: {
    Project
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
  }
};
</script>

<style>
</style>