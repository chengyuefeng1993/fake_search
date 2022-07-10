<template>
  <div class="layout">
    <Layout :style="{ height: '100%' }">
      <Header class="header" :style="{
        background: '#2d8cf0',
        padding: '0',
        height: '55px'
      }">
        <TitleBar />
      </Header>
      <Layout class="mainview">
        <Sider class="side" ref="side" :style="{
          background: '#fff',
          borderRight: '1px soild #dddee1',
          // height: 'inherit',
          overflow: 'hidden auto'
        }" width="240px" hide-trigger collapsible collapsed-width="60px" v-model:model-value="store.isCollapsible">
          <NavBar :shower="shower" />
          <template #trigger>
            <div class="showbar" @click="shower">
              <Icon type="ios-arrow-forward" v-show="store.isCollapsible" />
              <Icon type="ios-arrow-back" v-show="!store.isCollapsible" />
              <span v-show="!store.isCollapsible" :style="{ borderRight: '1px soild #dddee1' }">收起侧边栏</span>
            </div>
          </template>
        </Sider>
        <Layout>
          <SearchBar :style="{ padding: '10px' }" />
          <Content :style="{ padding: '10px', minHeight: '280px', background: '#fff' }"><Data /></Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script setup lang="ts">
import TitleBar from './components/TitleBar.vue';
import NavBar from './components/NavBar.vue';
import SearchBar from './components/dataview/SearchBar.vue';
import { useStore } from './store';
import Data from './components/Data.vue';

const store = useStore();
const side = ref();

const shower = () => {
  return side.value.toggleCollapse();
};
</script>
<style>
#app {
  height: 100vh;
}

.showbar {
  position: fixed;
  bottom: 0;
  width: inherit;
  height: 50px;
  background-color: #ffffff;
  line-height: 50px;
  padding: 0 24px;
  border-right: 1px solid #dddee1;
  cursor: pointer;
}

.layout {
  height: 100vh;
}

.side {
  height: 100%;
  border-right: 1px solid #dddee1;
  transition: width .1s ease;
}
</style>
