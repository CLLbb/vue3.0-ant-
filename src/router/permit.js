import Router from "./index"
// import { getToken } from "@/utils/cookies"
Router.beforeEach((to, from, next) => { //只要路由发生变化，都会调用此方法
  if(0){  // 必须调用 `next`，如果不调用，页面将会出现白屏现象，如果只使用了next，而to, from没有被使用时，路由不会跳转
      next()
  }else{ //对页面进行判断，避免死循环
      if(to.name === "login" || to.name === "Register"){
          next() //如果页面是要进入登录页或者注册页，直接放行
      }else{
          next({name:"login"}) //如果要进入其他页面，进行拦截
      }
  }
  })