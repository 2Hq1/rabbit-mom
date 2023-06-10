<!--
 * @Author: “2Hq1” 274895084@qq.com
 * @Date: 2023-06-03 21:55:39
 * @LastEditors: “2Hq1” 274895084@qq.com
 * @LastEditTime: 2023-06-08 17:02:19
 * @FilePath: \rabbit\vue-rabbit\src\views\Home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import HomeBanner from "./components/HomeBanner.vue";
import HomeProduct from "./components/HomeProduct.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeNew from "./components/HomeNew.vue";
</script>
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>
