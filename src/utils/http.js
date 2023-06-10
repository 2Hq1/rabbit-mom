/*
 * @Author: “2Hq1” 274895084@qq.com
 * @Date: 2023-06-02 22:14:16
 * @LastEditors: “2Hq1” 274895084@qq.com
 * @LastEditTime: 2023-06-02 22:31:49
 * @FilePath: \vue-rabbit\src\utils\http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//axios配置
import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
  })

export default httpInstance;
