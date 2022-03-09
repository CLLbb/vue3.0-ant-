<template>
  <div>
    <div class="logo">
      <img v-if="collapseval" :src="logo2" alt="企业级管理后台">
      <img v-else  :src="logo" alt="企业级管理后台">
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
              <a-menu-item v-if='hasOnlyChildren(item) ' :key="item.path">
                <router-link :to='item.path'>
                  <span class="anticon"><svg-icon :iconName='item.meta && item.meta.icon' :className="aside-svg"></svg-icon></span>
                  <span>{{item.meta && item.meta.title}} </span>
              </router-link>
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
    Menu,
  },
  props:{
    collapseval:{
      type:Boolean,
      default:false
    }
  },

  setup() {
    const {options} = useRouter()   
    var routers = options.routes
    const state = reactive({
      // 菜单状态
      selectedKeys:localStorage.getItem('selectedKeys') ? [localStorage.getItem('selectedKeys') ] : [ ] ,
      openKeys: localStorage.getItem('openKeys') ? JSON.parse(localStorage.getItem('openKeys')) :[],
      // logo
     logo: require ('@/assets/images/logo.png'),
     logo2: require ('@/assets/images/logo2.png')
    });

    const toggleCollapsed = () => {
    };

    const seleceMenu = ({ item, key, keyPath }) => {
      localStorage.setItem('selectedKeys',key)
    };

    const openMenu = (openKeys)=>{
      localStorage.setItem('openKeys',JSON.stringify(openKeys))
    }

    // 检测是否只有一个子路由
    const hasOnlyChildren = (data) => {
      // 不存在子集的情况
      if(!data.children){
        return false
      }
      // 过滤隐藏的子集路由
      const routers = data.children.filter(item => item.hidden ? false : true);
      // 判断最终结果
      if(routers.length === 1){
        return true
      }else{
        return false
      }
    }

    return { 
      ...toRefs(state),
      toggleCollapsed,
      routers,
      seleceMenu,
      openMenu,
      hasOnlyChildren
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