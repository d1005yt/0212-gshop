/* 管理首页的 */
import {
  reqCategoryList,
  reqBanners,
  reqFloors,
  reqTodays
} from '../../api'

export default {
  state: {
    categoryList: [], //分类列表
    banners: [], //广告轮播列表
    floors: [], //楼层列表数据
    todays: [], //今日推荐
  },
  //当前子模块的

  mutations: {
    //接收保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList.filter((item, index) => index < 15)
    },

    //接收保存广告轮播列表
    RECEIVE_FLOORS(state, floors) {
      state.floors = floors
    },

    //接收保存楼层列表数据
    RECEIVE_BANNERS(state, banners) {
      state.banners = banners
    },

    RECEIVE_TODAYS(state, todays) {
      state.todays = todays
    }
  },

  actions: {
    //请求获取分类列表
    async getCategoryList({
      commit
    }) {
      //调用接口请求函数，发送异步ajax请求
      const result = await reqCategoryList()
      //成功，取出数据保存到mutation
      if (result.code === 200) {
        const categoryList = result.data
        commit('RECEIVE_CATEGORY_LIST', categoryList)
      }
    },

    //异步请求获取广告轮播列表
    async getBanners({
      commit
    }) {
      const result = await reqBanners()
      if (result.code === 200) {
        const banners = result.data
        commit('RECEIVE_BANNERS', banners)
      }
    },

    //异步请求获取广告轮播列表
    async getFloors({
      commit
    }) {
      const result = await reqFloors()
      if (result.code === 200) {
        const floors = result.data
        commit('RECEIVE_FLOORS', floors)
      }
    },

    //异步请求获取今日推荐
    async getTodays({
      commit
    }) {
      const result = await reqTodays()
      if (result.code === 200) {
        const todays = result.data
        commit('RECEIVE_TODAYS', todays)
      }
    },

  },

  getters: {},

}