# vue-cli 脚手架

<div style="color: red"> 
    vue官方脚手架,现已被vite代替
</div>

## vue-cli 常用配置

```js
// vue.config.js

const { defineConfig } = require("@vue/cli-service");
const compressionPlugin = require("compression-webpack-plugin"); // 压缩插件
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // 打包分析插件

const { resolve } = require("path");

const ENV = process.env.NODE_ENV;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: ENV === "development" ? "/" : "/mlc/",
  productionSourceMap: ENV === "development" ? true : true,
  outputDir: "mlc",
  configureWebpack: (config) => {
    // if (ENV === 'production') {
    //   config.plugins.push(
    //     new compressionPlugin({
    //       filename: '[path][base].gz',
    //       algorithm: 'gzip',
    //       test: /\.js$|\.css$|\.html$/,
    //       threshold: 10240,
    //       minRatio: 0.8,
    //       deleteOriginalAssets: true,
    //     })
    //   );
    // }

    // config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 6663 }));

    config.resolve.alias["@"] = resolve(__dirname, "src");
  },
  devServer: {
    host: "0.0.0.0",
    port: 9999, // 端口
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://server1/",
        pathRewrite: {
          "^/api": "",
        },
      },
      "/user": {
        target: "http://server2/",
        pathRewrite: {
          "^/user": "/user",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#c62651",
            "border-radius-base": "4px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
});
```
