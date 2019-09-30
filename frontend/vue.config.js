
module.exports = {

    pwa: {
      name: 'heaalth_dev',
      shortName:'YST',
      startUrl:'./index.html',
      display: 'standalone',
      themeColor: '#F37373',
      msTileColor: '#F37373',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      //配置 workbox 插件
      workboxOptions: {
        swSrc: './service-worker.js'
      },
      workboxPluginMode: 'InjectManifest',

    },
    devServer: {
      https:false,
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: '0.0.0.0', //本地测试 
        port: 3000, //本地端口号
        proxy: {
            '/api': {
              target: 'http://localhost:8762/api/',
              ws: true,
              changeOrigin: true,
              autoRewrite: true,
              cookieDomainRewrite: true,
              pathRewrite: {'^/api':''},
            },
            //店铺距离api
            '/sapi': {
              target: 'http://localhost:8091/api/latitude/',
              ws: true,
              changeOrigin: true,
              autoRewrite: true,
              cookieDomainRewrite: true,
              pathRewrite: {'^/sapi':''},
            },
            //百度地图搜索api
            '/v2':{
              target:'http://api.map.baidu.com/place/v2/',
              ws:true,
              changeOrigin:true,
              autoRewrite: true,
              //cookieDomainRewrite: true,
              pathRewrite: {'^/v2':''},
            }
          },
    },
    configureWebpack:{
      resolve:{
        alias:{
          'assets': '@/assets',
          'components': '@/components',
          'views': '@/views',
        }
      }  
    },
}


