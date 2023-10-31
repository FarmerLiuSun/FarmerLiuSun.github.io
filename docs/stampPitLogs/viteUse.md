# vite 构建工具

<div style="color: red"> 
    尤大出品, 必属精品
</div>

## vite 常用配置

```js
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      include: /(\.js)|(\.[jt]sx)$/,
    }),
  ],
  base: "/",
  publicDir: "public",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 4444,
    proxy: {
      "/api": {
        target: "http://dev/", //开发环境
        rewrite: (path) => path.replace(/^\/api/, ""),
        changeOrigin: true,
      },
    },
    hmr: true,
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#c62651",
        },
        javascriptEnabled: true,
        additionalData: `@import "${resolve(
          __dirname,
          "src/assets/style/varible.less"
        )}";`,
      },
    },
  },
});
```
