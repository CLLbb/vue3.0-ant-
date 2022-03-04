<template>
  <div>
    <div class="logo">
      <img :src="logo" alt="企业级管理后台">
    </div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      @click='seleceMenu'
      @openChange='openMenu'
    >
    <!-- 一级菜单 -->
      <template v-for="item in routers" :key="item.path">
         <template v-if='!item.hidden'>
              <a-menu-item v-if='!item.children ' :key="item.path">
              <i class='icon icon-aside-home' :class="item.meta.icon"></i>
              <router-link :to='item.path'>{{item.meta && item.meta.title}} </router-link>
            </a-menu-item>
          <!--二级菜单  -->
              <Menu :menu='item' v-else :key="item.path"/>
         </template>
      </template>   
    </a-menu>
  </div>
</template>
<script>
import {  reactive, toRefs, watch } from 'vue';
import { useRoute , useRouter} from 'vue-router';
import Menu from './Menu.vue'
import {  MailOutlined, InboxOutlined} from '@ant-design/icons-vue';
export default({
  components: {
    MailOutlined,
    InboxOutlined,
    Menu
  },

  setup() {
    const {options} = useRouter()   
    var routers = options.routes
    const state = reactive({
      // 菜单状态
      selectedKeys:localStorage.getItem('selectedKeys') ? [localStorage.getItem('selectedKeys') ] : [ ] ,
      openKeys: localStorage.getItem('openKey') ? [localStorage.getItem('openKey')] :[],
      // logo
     logo: require ('@/assets/images/logo.png')
    });

    const toggleCollapsed = () => {
    };

    const seleceMenu = ({ item, key, keyPath }) => {
      localStorage.setItem('selectedKeys',key)
    };

    const openMenu = (openKeys)=>{
      localStorage.setItem('openKey',openKeys)
    }

    return { 
      ...toRefs(state),
      toggleCollapsed,
      routers,
      seleceMenu,
      openMenu
    };
  },

});
</script>
<style scoped lang='scss'>
  .logo{
    padding: 20px 0 ;
    text-align: center;
    border-bottom: 1px solid #000;
    img{
      display: inline-block;
    }
  }
</style>