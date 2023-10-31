# element-plus

## 全局导入

```js
import { createApp } from "vue";
import App from "./App";

import elementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp().use(elementPlus).mount(App);
```

## 按需导入

```vue
<script setup>
import { ElButton } from "element-plus";
</script>
```
