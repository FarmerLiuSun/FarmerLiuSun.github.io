# vueRouter

## 视图

<script setup>
import {onMounted} from 'vue';

console.log('hello vitePress')

onMounted(() => {
  const elBtnContainer = document.querySelector('.btn_container');
  const elLeafContainer = document.querySelector('.leaf_container');

  elBtnContainer.addEventListener('click', function (e) {
    const classNameList = Array.from(e.target.classList);

    if (classNameList.includes('btn_one')) {
      elLeafContainer.style.animation = 'leafRotate 1s linear infinite';
    }

    if (classNameList.includes('btn_two')) {
      elLeafContainer.style.animation = 'leafRotate 0.6s linear infinite';
    }

    if (classNameList.includes('btn_three')) {
      elLeafContainer.style.animation = 'leafRotate 0.2s linear infinite';
    }

    if (classNameList.includes('btn_off')) {
      elLeafContainer.style.animation = 'none';
    }
  });
})
</script>

<div class="farmer_container">
  <div class="container">
    <div class="round big">
      <div class="round small">
        <div class="round mini"></div>
      </div>
    </div>

  <div class="leaf_container">
    <div class="leaf one"></div>
    <div class="leaf two"></div>
    <div class="leaf three"></div>

  <div class="logo">
    <div class="logo_img"></div>
  </div>

  </div>

  <div class="fan_body">
    <div class="btn_container">
      <div class="btn btn_one">1</div>
      <div class="btn btn_two">2</div>
      <div class="btn btn_three">3</div>
      <div class="btn btn_off">off</div>
    </div>
  </div>

  <div class="base"></div>
  </div>

</div>

<style>
@keyframes leafRotate {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

<style scoped>
.farmer_container {
        --leafBgc: #60e0fb;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container {
        width: 800px;
        height: 1000px;
        border: 1px solid #fff;
        position: relative;
        margin: 20px auto;

        background-color: rgb(252, 250, 248);
      }

      .round {
        border: 2px solid #ccc;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        z-index: 2;
      }

      .big {
        width: 570px;
        height: 570px;
        margin-top: 50px;
        transform: translate(-50%);
      }
      .small {
        width: 350px;
        height: 350px;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .mini {
        width: 250px;
        height: 250px;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .leaf_container {
        width: 400px;
        height: 400px;
        margin-top: 135px;
        margin-left: -200px;
        position: relative;
        left: 50%;
        transform: rotate(45deg);
        z-index: 2;

        /* animation: leafRotate 1s linear infinite; */
      }

      .leaf {
        width: 200px;
        height: 200px;
        border-top-left-radius: 100%;
        border-bottom-right-radius: 100%;
        border: 1px solid #ccc;

        background-color: var(--leafBgc);

        transform-origin: bottom left;
        position: absolute;
        left: 50%;
        z-index: 2;
      }

      .two {
        transform: rotate(120deg);
      }
      .three {
        transform: rotate(240deg);
      }
      .logo {
        width: 80px;
        height: 80px;
        border: 1px solid #ccc;
        border-radius: 50%;
        background-color: #fff;
        z-index: 2;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .logo_img {
        width: 60px;
        height: 60px;
        border: 1px solid #ccc;
        border-radius: 50%;
        background-color: peru;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .fan_body {
        width: 50px;
        height: 480px;
        border: 1px solid #ccc;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: #fff;
        box-shadow: 5px 2px 2px rgba(235, 235, 235, 0.8);
        position: absolute;
        left: calc(50% - 25px);
        top: 365px;
        z-index: 1;
      }

      .btn_container {
        position: absolute;
        top: 272px;
        left: 50%;
        transform: translate(-50%);
      }

      .btn {
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-bottom: 10px;
        color: #fff;
        cursor: pointer;
      }

      .btn_one {
        background-color: paleturquoise;
      }

      .btn_two {
        background-color: peachpuff;
      }

      .btn_three {
        background-color: plum;
      }

      .btn_off {
        background-color: red;
      }

      .base {
        width: 500px;
        height: 250px;
        border-radius: 50%;
        position: absolute;
        border: 2px solid #ccc;
        background-color: #fff;
        box-shadow: 5px 4px 3px rgba(235, 235, 235, 0.8);

        left: 50%;
        transform: translate(-50%);
        top: 740px;
        z-index: 0;
      }
</style>

## 代码

:::details

```vue
<template>
  <div class="farmer_container">
    <div class="container">
      <div class="round big">
        <div class="round small">
          <div class="round mini"></div>
        </div>
      </div>

      <div class="leaf_container">
        <div class="leaf one"></div>
        <div class="leaf two"></div>
        <div class="leaf three"></div>

        <div class="logo">
          <div class="logo_img"></div>
        </div>
      </div>

      <div class="fan_body">
        <div class="btn_container">
          <div class="btn btn_one">1</div>
          <div class="btn btn_two">2</div>
          <div class="btn btn_three">3</div>
          <div class="btn btn_off">off</div>
        </div>
      </div>

      <div class="base"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const elBtnContainer = document.querySelector(".btn_container");
  const elLeafContainer = document.querySelector(".leaf_container");

  elBtnContainer.addEventListener("click", function (e) {
    console.log("%c e.target.classList", "font-size: 30px ;color: red");
    console.log(Array.from(e.target.classList));
    const classNameList = Array.from(e.target.classList);

    if (classNameList.includes("btn_one")) {
      elLeafContainer.style.animation = "leafRotate 1s linear infinite";
    }

    if (classNameList.includes("btn_two")) {
      elLeafContainer.style.animation = "leafRotate 0.6s linear infinite";
    }

    if (classNameList.includes("btn_three")) {
      elLeafContainer.style.animation = "leafRotate 0.2s linear infinite";
    }

    if (classNameList.includes("btn_off")) {
      elLeafContainer.style.animation = "none";
    }
  });
});
</script>

<style>
.farmer_container {
  --leafBgc: #60e0fb;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 800px;
  height: 1000px;
  border: 1px solid #fff;
  position: relative;
  margin: 20px auto;

  background-color: rgb(252, 250, 248);
}

.round {
  border: 2px solid #ccc;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  z-index: 2;
}

.big {
  width: 570px;
  height: 570px;
  margin-top: 50px;
  transform: translate(-50%);
}
.small {
  width: 350px;
  height: 350px;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mini {
  width: 250px;
  height: 250px;
  top: 50%;
  transform: translate(-50%, -50%);
}

.leaf_container {
  width: 400px;
  height: 400px;
  margin-top: 135px;
  margin-left: -200px;
  position: relative;
  left: 50%;
  transform: rotate(45deg);
  z-index: 2;

  /* animation: leafRotate 1s linear infinite; */
}

.leaf {
  width: 200px;
  height: 200px;
  border-top-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border: 1px solid #ccc;

  background-color: var(--leafBgc);

  transform-origin: bottom left;
  position: absolute;
  left: 50%;
  z-index: 2;
}

.two {
  transform: rotate(120deg);
}
.three {
  transform: rotate(240deg);
}
.logo {
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  z-index: 2;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.logo_img {
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: peru;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.fan_body {
  width: 50px;
  height: 480px;
  border: 1px solid #ccc;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 2px 2px rgba(235, 235, 235, 0.8);
  position: absolute;
  left: calc(50% - 25px);
  top: 365px;
  z-index: 1;
}

.btn_container {
  position: absolute;
  top: 272px;
  left: 50%;
  transform: translate(-50%);
}

.btn {
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-bottom: 10px;
  color: #fff;
  cursor: pointer;
}

.btn_one {
  background-color: paleturquoise;
}

.btn_two {
  background-color: peachpuff;
}

.btn_three {
  background-color: plum;
}

.btn_off {
  background-color: red;
}

.base {
  width: 500px;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #ccc;
  background-color: #fff;
  box-shadow: 5px 4px 3px rgba(235, 235, 235, 0.8);

  left: 50%;
  transform: translate(-50%);
  top: 740px;
  z-index: 0;
}
</style>
```

:::
