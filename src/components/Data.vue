<template>
  <div class="data">
    <StageData />
    <Row :gutter="10">
      <Col :xxl="16" :xl="16" :lg="16" :md="16">
      <TagData />
      </Col>
      <Col :xxl="8" :xl="8" :lg="8" :md="8">
      <SkipData />
      </Col>
    </Row>
  </div>
  <div v-show="store.isspin" :style="{ position: 'relative', width: '100%', height: '100%' }">
    <Spin fix size="large" />
  </div>
</template>
<script setup lang="ts">
import StageData from './dataview/StageData.vue';
import TagData from './dataview/TagData.vue';
import SkipData from './dataview/SkipData.vue';
import { useStore } from '../store';

const store = useStore()


</script>
<style scoped>
</style>