<template>
  <transition name="fade">
    <div class="stage" v-show="isShow">
      <Divider>包数据</Divider>
      <div class="stage-date">
        <span>总数：{{ stage?.totalCount }}</span><br>
        <span>审核完成：{{ stage?.finishedCount }}</span><br>
        <span>未领取：{{ stage?.waitForMarkCount }}</span><br>
        <span>总暂跳：{{ stage?.markingSkipCount }}</span><br>
        <span>已领取未提交：{{ stage?.markingHandlingCount }}</span><br>
        <span>质检未领取：{{ stage?.auditWaitForMarkCount }}</span><br>
        <span>质检暂跳：{{ stage?.auditSkipCount }}</span><br>
        <span>质检领取未提交：{{ stage?.unAuditCount }}</span>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useStore } from '../../store';

const store = useStore()
const stage = computed(() => store.stagelist)
const isShow = computed(() => {
  if (Object.getOwnPropertyNames(stage.value).length > 0) {
    return true
  } else {
    return false
  }
})
</script>
<style scoped>
.stage {
  border: 1px solid #e8eaec;
  padding: 10px;
}
</style>