//store:核心的管理对象
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
  // state,
  mutations,
  actions,
  getters,
  modules
})