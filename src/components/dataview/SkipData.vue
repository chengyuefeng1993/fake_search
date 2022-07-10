<template>
  <transition name="fade">
    <div class="skip" v-show="isShow">
      <Divider>暂跳</Divider>
      <Table size="small" border :columns="columns" :data="skip"></Table>
      <Divider>{{ skip.length }}</Divider>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useStore } from '../../store';

const store = useStore()
const columns = [
  {
    title: '姓名',
    key: 'userName',
    align: 'center',
  },
  {
    title: '数量',
    key: 'count',
    align: 'center',
    render: (h: Function, parmas: { row: { count: any; }; }) => {
      return h('span', {
        style: {
          color: parmas.row.count === 50 ? 'red' : 'green'
        }
      }, parmas.row.count)
    }
  }
]
const skip = computed(() => store.skiplist)
const isShow = computed(() => {
  if (store.skiplist.length > 0) {
    return true
  } else {
    return false
  }
})
</script>
<style scoped>
</style>