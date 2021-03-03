<template>
  <home :blog="blog" :project="project" />
</template>

<script>
import * as Api from '@/api/home';

import Home from '@/components/home';
export default {
  components: {
    Home
  },
  async asyncData({ app, query, error, req = {} }) {
    try {
      const { data = {} } = await Api.list.call(app);
      const { blog = [], project = [] } = data;
      return {
        data,
        blog,
        project
      };
    } catch (e) {
      error({ statusCode: (e.response && e.response.status) || 500 });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
