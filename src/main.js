import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 引入I18语言包
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',//设备默认语言
  messages:{  //引入语言包
      ch:require('./language/ch.js'),
      en:require('./language/en.js')
  }
})

createApp(App)
    .use(store)
    .use(router)
    .use(Antd) //使用Antd
    .use(i18n)
    .mount("#app");
