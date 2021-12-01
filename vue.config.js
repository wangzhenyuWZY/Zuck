module.exports = {
    // 基本路径 baseURL已经过时
    publicPath: './', 
    // 输出文件目录
    outputDir: 'stake',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
     // 是否使用css分离插件 ExtractTextPlugin
     extract: true,
     // 开启 CSS source maps?
     sourceMap: false,
     // css预设器配置项
     loaderOptions: {
        less: {
            globalVars: {
                'theme-color': '#421466'
            }
        }
     },
     // 启用 CSS modules for all css / pre-processor files.
     modules: false
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    }
}