<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <Aside/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" >
        <Header/>
      </a-layout-header>
      <a-layout-content :style="{background: '#fff', margin: '24px 16px 0' }">
       <Content/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script >
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import Aside from "./aside/Index.vue"
import Header from "./components/Header.vue"
import Content from "./components/Content.vue"
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    Aside,
    Header,
    Content
  },
  setup() {
    const onCollapse = () => {
      console.log();
    };

    const onBreakpoint = () => {
      console.log();
    };

    return {
      selectedKeys: ref(['4']),
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>
<style>
.ant-layout-sider-children {
    height: 100vh;
    margin-top: -0.1px;
    padding-top: 0.1px;
}
</style>