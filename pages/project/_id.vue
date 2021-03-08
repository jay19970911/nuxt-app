<template>
  <project-detail :data="data" />
</template>

<script>
import * as Api from '@/api/project';
import ProjectDetail from '@/components/project-detail';
export default {
  components: {
    ProjectDetail
  },
  async asyncData({ params }) {
    let { id = '' } = params;
    let { data } = await Api.detail(id);
    return {
      data
    };
  }
};
</script>

<style>
</style>