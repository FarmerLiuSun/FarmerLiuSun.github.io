import DefaultTheme from "vitepress/theme";
import "./custom.css";

import Layout from "./components/Layout.vue";

export default {
  ...DefaultTheme,
  Layout,
};
