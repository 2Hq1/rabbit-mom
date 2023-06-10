/*
 * @Author: “2Hq1” 274895084@qq.com
 * @Date: 2023-06-01 23:28:42
 * @LastEditors: “2Hq1” 274895084@qq.com
 * @LastEditTime: 2023-06-03 21:24:06
 * @FilePath: \vue-rabbit\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-env node */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/multi-word-component-names": 0,
  },
};
