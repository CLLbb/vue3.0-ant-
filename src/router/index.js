import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component:() => import('@/views/account/Login'),
  },
  {
    path:'/register',
    name:'Register',
    component:() => import('@/views/account/Register')
  },
  {
    path: "/test",
    name: "test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/account/test"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
