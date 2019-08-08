// 在控制台打印
console.log('***************************')
console.log('环境:' + process.env.NODE_ENV)
console.log('前端资源链接:' + process.env.VUE_APP_URL)
console.log('接口地址:' + process.env.VUE_APP_APIURL)
console.log('***************************')
const {resolve} = require('path');
const fs = require('fs');

module.exports = {

  publicPath: process.env.VUE_APP_URL || '/',

  outputDir: './dist',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins.push({
        apply: (compiler) => {

          compiler.hooks.done.tap('delContent', compilation => {
            
          });
        }
      })
    } else {
      // 为开发环境修改配置...
    }
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置

  css: {
   // 是否使用css分离插件 ExtractTextPlugin
   extract: process.env.NODE_ENV === 'development' ? false : true,
   // 开启 CSS source maps?
   sourceMap: false,
   // css预设器配置项
   loaderOptions: {},
   // 启用 CSS modules for all css / pre-processor files.
   modules: false
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // webpack-dev-server 相关配置
  devServer: {
   open: process.platform === 'darwin',
   host: '192.168.92.182',
  //  host: '0.0.0.0',
   port: 8088,
   https: false,
   hotOnly: false,
   proxy: {
    "/test": {
      target: 'http://216.24.177.174:3000', 
      ws: true,
      changeOrigin: true
    }
   }, // 设置代理
  },
  // 第三方插件配置
  pluginOptions: {
   
  }
}