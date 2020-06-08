//store:核心的管理对象
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import user from './modules/user'

Vue.use(Vuex)

const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
  // state,
  mutations,
  actions,
  getters,
  modules: { //指定所有子模块
    home,
    user
  }
})