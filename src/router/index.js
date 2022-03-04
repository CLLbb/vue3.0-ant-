import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    hidden:true,
    meta:{
      title:'登录'
    },
    component:() => import('@/views/account/Login'),
  },
  {
    path:'/register',
    name:'Register',
    hidden:true,
    meta:{
      title:'注册'
    },
    component:() => import('@/views/account/Register')
  },
  {
    path: "/home",
    name: "Home",
    meta:{
      title:'首页',
      icon:'icon-aside-home'
    },
    component: () => import('@/views/layout/Index'),
  },
  {
    path: "/admin",
    name: "Admin",
    meta:{
      title:'管理总台',
      icon:'aside-console'
    },
    component: () => import('@/views/layout/Index'),
    children:[
      {
        path:'/role',
        name:'Role',
        meta:{
          title:'角色管理'
        },
        component:() => import('@/views/admin/Role'),
      },
      {
        path:'/user',
        name:'User',
        meta:{
          title:'用户管理'
        },
        component:() => import('@/views/admin/User'),
      },
    ]
  },
  // 新闻中心
  {
    path:'/news',
    name:'News',
    meta:{
      title:'信息管理',
      icon:'aside-informtion'
    },
    component: () => import('@/views/layout/Index'),
  },
  {
    path:'/user2',
    name:'User2',
    meta:{
      title:'用户管理',
      icon:'aside-user'
    },
    component: () => import('@/views/layout/Index'),
  },
  {
    path:'/project',
    name:'Project',
    meta:{
      title:'产品管理',
      icon:'aside-product'
    },
    component: () => import('@/views/layout/Index'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
