import { defineConfig } from "vitepress";

import { resolve } from "node:path";

export default defineConfig({
  title: "FarmerLiuSun",
  description: "FarmerLiuSun personal website",
  base: "/",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  outDir: "../docs",
  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
  cleanUrls: true,
  markdown: {
    lineNumbers: true, // 是否显示行数，默认false
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    // 友情链接地址
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    outline: {
      level: "deep",
      label: "页面导航",
    },
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
          }
        }
      },

    },
    lastUpdated: {
      text: "最后更新时间",
    },
    nav: [
      // { text: "首页", link: "/" },
      {
        text: "vue3全家桶",
        items: [
          {
            text: "vueRouter",
            link: "/vue3Family/vueRouter",
          },
          {
            text: "pinia",
            link: "/vue3Family/pinia",
          },
        ],
      },
      {
        text: "踩坑logs",
        items: [
          {
            text: "构建工具",
            link: "/stampPitLogs/viteUse",
          },
          {
            text: "uiLibs",
            link: "/stampPitLogs/elementPlus",
          },
        ],
      },
      {
        text: "前端框架",
        items: [
          {
            items: [
              {
                text: "vue3",
                link: "https://cn.vuejs.org/",
              },
              {
                text: "vue2",
                link: "https://v2.cn.vuejs.org/",
              },
            ],
          },
          { text: "react", link: "https://v2.vitejs.dev/" },
        ],
      },
    ],
    sidebar: {
      "/stampPitLogs/": {
        base: "/stampPitLogs/",
        items: [
          {
            text: "构建工具",
            collapsed: false,
            items: [
              { text: "vite", link: "viteUse" },
              { text: "vue-cli", link: "vueCli" },
            ],
          },
          {
            text: "ui组件库",
            collapsed: false,
            items: [
              { text: "element-plus", link: "elementPlus" },
              { text: "ant-design-vue", link: "antDesignVue" },
            ],
          },
        ],
      },
      "/vue3Family/": {
        base: "/vue3Family/",
        items: [
          {
            text: "pinia",
            collapsed: false,
            items: [
              { text: "setup", link: "vueRouter" },
              { text: "vue-cli", link: "vueCli" },
            ],
          },
          {
            text: "vue-router",
            collapsed: false,
            items: [
              { text: "element-plus", link: "elementPlus" },
              { text: "ant-design-vue", link: "antDesignVue" },
            ],
          },
        ],
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: "Free & undefined",
    },
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: 9996,
    },
  },
});

console.log(resolve(__dirname, "src"));
