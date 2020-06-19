import Vue from 'vue'
import VueRouter from "vue-router"
import routes from "./routes"
import store from '@/store'

Vue.use(VueRouter)

//重写push
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onComplete, onAbort) {
  console.log('push()', location, onComplete, onAbort)
  //若没有回调函数，需要catch错误的promise
  if (!onComplete && !onAbort) {
    return originPush.call(this, location).catch(error => {
      console.log('---push', error.message)
    })
  } else { //有回调函数
    originPush.call(this, location, onComplete, onAbort)
  }
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  console.log('replace()', location, onComplete, onAbort)
  //若没有回调函数，需要catch错误的promise
  if (!onComplete && !onAbort) {
    return originReplace.call(this, location).catch(error => {
      console.log('---replace', error.message)
    })
  } else { //有回调函数
    originReplace.call(this, location, onComplete, onAbort)
  }
}




const router = new VueRouter({
  mode: 'history',
  routes,

  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})

//访问这些路由路径必须检查其已经登录
const checkPaths = ['/trade', '/pay', '/center']

//注册全局前置守卫
router.beforeEach((to, from, next) => { //监视的回调
  //得到目标路径
  const targetPath = to.path
  //判断如果是需要登陆检查的
  //  if( checkPaths.indexOf(targetPath)>=0)   不对，请求路径可能是/center/myorder
  const needCheck = !!checkPaths.find(path => targetPath.indexOf(path) === 0)
  if (needCheck) {
    //已经登陆，放行
    const token = store.state.user.userInfo.token
    if (token) {
      next()
    } else {
      //没有登陆，强制跳转到登陆界面
      next('/login?redirect=' + targetPath)
    }
  } else {
    //如果是不需要检查的，直接放行
    next()
  }
})

export default router