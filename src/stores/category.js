/*
 * @Author: “2Hq1” 274895084@qq.com
 * @Date: 2023-06-06 22:11:20
 * @LastEditors: “2Hq1” 274895084@qq.com
 * @LastEditTime: 2023-06-08 16:15:11
 * @FilePath: \rabbit\vue-rabbit\src\stores\category.js
 * @Desc    ription: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
import { getCateGoryAPI } from "@/apis/layout";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", () => {
  const cateGorylist = ref([]);
  const getCateGory = async () => {
    const res = await getCateGoryAPI();
    cateGorylist.value = res.result;
  };
  return { cateGorylist, getCateGory };
});
