/* 管理首页的 */
import {
  reqCategoryList
} from '../../api'

export default {
  state: {
    categoryList: [],
    xxx: {},
    yyy: 'atgg'
  },
  //当前子模块的

  mutations: {
    //保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList.filter((item, index) => index < 15)
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
    }
  },

  getters: {},

}