/*
 * @Author: “2Hq1” 274895084@qq.com
 * @Date: 2023-06-01 23:28:42
 * @LastEditors: “2Hq1” 274895084@qq.com
 * @LastEditTime: 2023-06-03 23:57:07
 * @FilePath: \vue-rabbit\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import "./assets/main.css";
import "./styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { getInstance } from "./apis/testApi";

getInstance().then((res) => {
  console.log(res);
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
