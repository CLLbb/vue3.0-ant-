const { defineConfig } = require("@vue/cli-service");
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // svg图标配置
  chainWebpack: config => {
    config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include.add(path.resolve('src/assets/svg')) //存放svg图标的目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]',
        });
    },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/style/main.scss";`
      },
    }
  }
});
