import Vue from 'vue'
import VueRouter from "vue-router"
import routes from "./routes"

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




export default new VueRouter({
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