<template>
  <a-layout>
    <a-layout-sider
      :collapsed="collapsed"
      :trigger='null'
      collapsiblez
    >
    <div class="logo" />
      <Aside :collapseval="collapsed"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" >
        <Header @handle='handleCollapse'/>
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
  setup(props) {
    const onCollapse = () => {
      console.log();
    };

    const collapsed = ref(localStorage.getItem("collapsed")?localStorage.getItem("collapsed"):false);

    const onBreakpoint = () => {
      console.log();
    };

    const handleCollapse = () => {
      collapsed.value = !collapsed.value
      localStorage.setItem('collapsed',collapsed.value)
      console.log('存储值:',typeof(localStorage.getItem("collapsed")))
    }

    return {
      selectedKeys: ref(['4']),
      onCollapse,
      onBreakpoint,
      collapsed,
      handleCollapse
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