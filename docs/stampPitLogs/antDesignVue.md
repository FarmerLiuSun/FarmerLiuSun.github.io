# ant-design-vue 使用

## 全局导入

```js
import { createApp } from "vue";
import App from "./App";

import antdv from "ant-design-vue";
import "ant-design-vue/dist/index.css";

createApp().use(antdv).mount(App);
```

## 按需导入

```vue
<script setup>
import { ElButton } from "ant-design-vue";
</script>
```
