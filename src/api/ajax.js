import axios from 'axios'
import NProgress from 'nprogress'
import store from '@/store'
// 配置通用的基础路径和超时
const instance = axios.create({
  baseURL: '/api',
  timeout: 15000
})
//请求拦截器
instance.interceptors.request.use(config => {
  NProgress.start()
  config.headers['userTempId'] = store.state.user.userTempId
  const token = store.state.user.userInfo.token
  if (token) {
    config.headers['token'] = token
  }
  return config
})
//响应拦截器
instance.interceptors.response.use(
  response => { //成功回调
    NProgress.done()
    return response.data
  },
  error => { //失败回调
    NProgress.done()
    alert(error.message || '未知错误')
    return Promise.reject(error)
  }
)
//暴露
export default instance