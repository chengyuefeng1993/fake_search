<template>
  <div class="searchbar">
    <Space wrap>
      <DatePicker type="datetimerange" v-model:model-value="store.datetime" style="width: 320px" />
      <ButtonGroup>
        <Button type="primary" @click="store.tmback">前一天</Button>
        <Button type="primary" @click="store.today">今天</Button>
        <Button type="primary" @click="store.tmfoward">后一天</Button>
      </ButtonGroup>
      <Input v-model:model-value="store.id" search enter-button="查询" @on-search="store.onSearch" clearable
        :maxlength='5' />
    </Space>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '../../store'
const store = useStore()

</script>
<style scoped>
.searchbar {
  background-color: #fff;
}
</style>