import { defineConfig } from "vitepress";

export default defineConfig({
  title: `FarmerLiuShun`,
  description: "FarmerLiuShun 知识体系网站",
  base: "/",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  outDir: "../docs",
  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false

  markdown: {
    lineNumbers: true, // 是否显示行数，默认false
  },

  themeConfig: {
    logo: "/logo.svg",
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
    outline: "deep",
    outlineTitle: "当前页",
    darkModeSwitchLabel: "外观",
    search: {
      provider: "local",
    },
    nav: [
      // { text: "html", link: "/html/", activeMatch: "/html/" },
      // { text: "css", link: "/css/", activeMatch: "/css/" },
      // { text: "js", link: "/js/", activeMatch: "/js/" },
      { text: "首页", link: "/" },
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
        // activeMatch: "/stampPitLogs/",
        // link: "/stampPitLogs/viteUse",
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
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    footer: {
      message: "本网页容版权为 FarmerLiuShun，保留所有权利。",
    },
  },
});
