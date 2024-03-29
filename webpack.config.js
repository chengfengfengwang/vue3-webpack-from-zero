const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// vue-loader文档 https://vue-loader.vuejs.org/guide/#manual-setup  https://github.com/vuejs/vue-loader
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    mode: "development",
    entry: path.resolve(__dirname, "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 3000,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.less$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        },
        { test: /\.vue$/, loader: "vue-loader" },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          },
          exclude: /node_modules/,
        },
        {
          test: /\.tsx$/,
          use: [
            "babel-loader",
            {
              loader: "ts-loader",
              options: { 
                appendTsxSuffixTo: [/\.vue$/],
                transpileOnly: true // solve reload vue file err; more info see ts-loader doc
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"), // 使用lodash.template
      }),
      new MiniCssExtractPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: env.analyze ? "server" : false,
      }),
    ],
    resolve: {
      // 配置模块是如何被解析的
      // extensions: ['.ts', '...'],// which is what enables users to leave off the extension when importing:
      extensions: ["tsx", ".ts", ".vue", ".js"],
      alias: {
        vue: "vue/dist/vue.esm-bundler.js", // 去哪里解析vue
        "@": path.resolve(__dirname, "src"), // 定义@代表的意义 在import xx from '@/xx' 时使用
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        views: path.resolve(__dirname, "src/views"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
    optimization: {
      // todo: 如何把常用的vue component单独抽离成一个文件，因为这个component可能被导入很多次
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
