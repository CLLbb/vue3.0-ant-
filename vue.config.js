const path = require('path');
const { env } = require('process');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '': './',
  outputDir:process.env.NODE_ENV === 'production'? 'dist': 'devDist',
  transpileDependencies: true,
  lintOnSave: false,
  // svg图标配置
  chainWebpack: config => {
    config.module.rules.delete('svg'); //删除默认配置中处理svg,
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include
        .add(path.resolve('./src/assets/svg')) //存放svg图标的目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]', //name为文件名，例子使用home.svg时候拼为icon-home
        });
    },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/style/main.scss";`
      },
    }
  },

  // 配置proxy代理
  devServer: {
    open:false,//运行项目浏览器是否自动打开
    host:'0.0.0.0',//是否可以允许外部访问
    port:8000,
    proxy: {
      [process.env.VUE_APP_FLAG]: {
        target: process.env.VUE_APP_APIURL,
        ws: false, //是否开启webstock
        changeOrigin: true,//是否开启跨域
        pathRewrite:{ //路径重写
          [`^${process.env.VUE_APP_FLAG}`]:'' //查找开头为/api的字符替换成空字符串
        }
      }
    }
  }
}
