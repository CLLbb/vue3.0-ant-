import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 引入svg
import './js/svg'
import SvgIcon from '@/components/Svgicon/Index.vue'

// 引入I18语言包
import { createI18n } from 'vue-i18n';

// 导入axios
import Axios from 'axios';

const i18n = createI18n({
  locale: 'en',//设备默认语言
  messages:{  //引入语言包
      ch:require('./language/ch.js'),
      en:require('./language/en.js')
  }
})

// 注入axios，以下写法是vue3.0的固定写法
const app = createApp(App)
app.config.globalProperties.$axios = Axios
app
    .use(store)
    .use(router)
    .use(Antd) //使用Antd
    .use(i18n)
    .component("svg-icon",SvgIcon)
    .mount("#app");
