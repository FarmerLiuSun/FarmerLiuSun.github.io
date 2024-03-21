import DefaultTheme from "vitepress/theme";
import "./custom.css";

import Layout from "./components/Layout.vue";
import MyBtn from './components/MyBtn.vue';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('MyBtn',MyBtn)
  }
};
