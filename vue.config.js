module.exports = {
  productionSourceMap:false ,
  publicPath: process.env.NODE_ENV == 'development' ? '/' : './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  devServer: {
    port:3333,
    // proxy: {
    //   '/api': {
    //     target: 'http://tm.lilanz.com',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    // }
      
    },
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "network": "@/network",
        "components": "@/components",
        "views": "@/views",
        "utils": "@/utils",
      }
    },
    externals:{
      "vue":"Vue",
      // "lodash":"Lodash"
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')

    // // 或者
    // // 修改它的选项：
    // config.plugin('prefetch').tap(options => {
    //   options[0].fileBlacklist = options[0].fileBlacklist || []
    //   options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
    //   return options
    // })
  }
}
