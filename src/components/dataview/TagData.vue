<template>
  <transition name="fade" v-show="isShow">
    <div class="tag" v-show="isShow">
      <Divider>标注数据</Divider>
      <Table size="small" border :columns="columns" :data="tag"></Table>
      <Divider>{{ tag.length }}</Divider>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useStore } from '../../store'

const store = useStore()
const columns = [
  { title: '姓名', key: 'userName', align: 'center' },
  { title: '数量', key: 'totalMarkedCount', align: 'center' },
  { title: '质检正确', key: 'firstAuditCorrectCount', align: 'center' },
  { title: '质检总数', key: 'firstAuditTotalCount', align: 'center' },
  {
    title: '准确率',
    key: 'firstAuditCorrectRatio',
    align: 'center',
    render: (h: Function, parmas: { row: { firstAuditCorrectRatio: any; }; }) => {
      return h('span', {
        style: {
          color: parmas.row.firstAuditCorrectRatio === '100.00%' ? 'green' : 'red'
        }
      }, parmas.row.firstAuditCorrectRatio)
    }
  },
]
const tag = computed(() => store.taglist)
const isShow = computed(() => {
  if (store.taglist.length > 0) {
    return true
  } else {
    return false
  }
})
</script>
<style scoped>
</style>
