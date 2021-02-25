<template>
  <blog-detail :data="data" />
</template>

<script>
import marked from 'marked';
import * as Api from '@/api/blog';
import BlogDetail from '@/components/blog-detail';
export default {
  components: {
    BlogDetail
  },
  async asyncData({ params }) {
    let { id = '' } = params;
    let { data } = await Api.detail(id);
    data.content = marked(data.content);
    return {
      data
    };
  }
};
</script>

<style>
</style>