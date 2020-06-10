import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'
import '@/mock/mockServer'
import 'swiper/css/swiper.min.css'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'

Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)

new Vue({
  render: h => h(App),
  router,
  store,

  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')