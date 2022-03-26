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
      icon:'home'
    },
    component: () => import('@/views/layout/Index'),
    children:[
      {
        path:'/home',
        name:'home',
        meta:{
          title:'首页'
        },
        component:() => import('@/views/home/Index')
      }
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    meta:{
      title:'管理总台',
      icon:'console'
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
      {
        path:'/menu',
        name:'Menu',
        meta:{
          title:'菜单管理'
        },
        component:() => import('@/views/admin/Menu'),
      },
    ]
  },
  // 新闻中心
  {
    path:'/news',
    name:'News',
    meta:{
      title:'信息管理',
      icon:'info'
    },
    component: () => import('@/views/layout/Index'),
  },

  // 用户管理
  {
    path:'/user2',
    name:'User2',
    meta:{
      title:'用户管理',
      icon:'user'
    },
    component: () => import('@/views/layout/Index'),
  },

  // 产品管理
  {
    path:'/project',
    name:'Project',
    meta:{
      title:'产品管理',
      icon:'product'
    },
    component: () => import('@/views/layout/Index'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
