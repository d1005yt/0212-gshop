import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'
import '@/mock/mockServer'
import 'swiper/css/swiper.min.css'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import './validate' //引入表单校验的配置模块
import './elements'
import VueLazyload from 'vue-lazyload'
import img from '../public/images/loading.jpg'

import * as API from '@/api'

Vue.use(VueLazyload, {
  loading: img
})
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)

//将api对象保存到vue原型对象，让所有组件对象直接可见
Vue.prototype.$API = API

new Vue({
  render: h => h(App),
  router,
  store,

  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')