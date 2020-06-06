import axios from 'axios'
import Nprogress from 'nprogress'
// 配置通用的基础路径和超时
const instance = axios.create({
  baseURL:'/api',
  timeout:15000
})
//请求拦截器
axios.interceptors.request.use(config=>{
  Nprogress.start()
  return config
})
//响应拦截器
axios.interceptors.response.use(
  response=>{//成功回调
    Nprogress.done()
    return response.data
  },
  error=>{//失败回调
    Nprogress.done()
    alert(error.message||'未知错误')
    return Promise.reject(error)
  }
)
//暴露
export default instance