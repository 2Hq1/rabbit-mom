<!--
 * @Author: “2Hq1” 274895084@qq.com
 * @Date: 2023-06-03 21:41:07
 * @LastEditors: “2Hq1” 274895084@qq.com
 * @LastEditTime: 2023-06-08 17:06:36
 * @FilePath: \rabbit\vue-rabbit\src\views\Layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoyNav from "./components/LayoyNav.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/category";

const category = useCategoryStore();
onMounted(() => {
  category.getCateGory();
});
</script>
<template>
  <LayoutFixed />
  <LayoyNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
