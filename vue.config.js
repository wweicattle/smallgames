module.exports = {
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
    port: 3333, // 端口号

    proxy: {
      '/api': {
        target: 'http://oa.wuwei.kooboo.site'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "network": "@/network",
        "components": "@/components",
        "views": "@/views",
      }
    }
  }
}
