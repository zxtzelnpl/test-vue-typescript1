const path = require('path')
const fs = require('fs')

const write = (data) => {
  fs.appendFile('./paths', data + '\n', (err) => {
    if (err) {
      throw err
    }
  })
}

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    name: 'zxt-patent-vue',
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        // additionalData: (content, loaderContext) => {
        //   const { resourcePath, rootContext } = loaderContext;
        //   const relativePath = path.relative(rootContext, resourcePath);
        //   if(relativePath === 'node_modules/vant/es/icon/index.less') {
        //     // 获取@vant/icons/src/index.less中的less文件
        //     const iconIndexLess = fs.readFileSync('node_modules/@vant/icons/src/index.less').toString()
        //     // 将获取的内容中，字体库的地址改为本地引用
        //     const newIconIndexLess = iconIndexLess.replace(/https:\/\/img.yzcdn.cn\/vant\//g, '~@vant/icons/src/')
        //     // 将icons/src/index.less中对于@vant/icons/src/index.less的引入替换为刚刚更新的newIconIndexLess
        //     return content.replace(`@import '~@vant/icons/src/index.less';`, newIconIndexLess)
        //   }
        //   return content
        // }
      }
    }
  },
  chainWebpack (config) {
    config.module.rule('svg')
      .exclude.add(resolve('src/icons'))
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}
