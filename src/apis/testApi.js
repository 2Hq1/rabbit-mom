/*
 * @Author: “2Hq1” 274895084@qq.com
 * @Date: 2023-06-02 22:28:34
 * @LastEditors: “2Hq1” 274895084@qq.com
 * @LastEditTime: 2023-06-02 22:30:14
 * @FilePath: \vue-rabbit\src\apis\testApi.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import httpInstance from "@/utils/http";

export function getInstance() {
  return httpInstance({
    url: "home/category/head",
  });
}
