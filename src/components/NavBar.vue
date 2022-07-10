<template>
  <div class="navbar">
    <Affix>
      <Menu mode="vertical">
        <Submenu name="1">
          <template #title>
            <Icon v-show="store.isCollapsible" type="ios-create-outline" />
            <div v-show="!store.isCollapsible">
              <Icon type="ios-create-outline" />
              <span :style="{ paddingLeft: '10px' }">标注系统</span>
            </div>
          </template>
        </Submenu>
      </Menu>
    </Affix>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '../store';

const store = useStore();
</script>
<style scoped>
.hiddentext {
  display: none;
}
</style>
