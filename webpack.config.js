const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// vue-loader文档 https://vue-loader.vuejs.org/guide/#manual-setup  https://github.com/vuejs/vue-loader
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  return {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
      hot: true
    },
    module: {
      rules: [
        { test: /\.vue$/, loader: 'vue-loader' }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html') // 使用lodash.template
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: env.production ? 'server' : false
      })
    ],
    resolve: { // 配置模块是如何被解析的
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js', // 去哪里解析vue
        '@': path.resolve(__dirname, 'src') // 定义@代表的意义 在import xx from '@/xx' 时使用
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  }

}