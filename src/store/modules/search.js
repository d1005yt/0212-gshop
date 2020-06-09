import {
  reqProductList
} from '@/api'

const state = {
  //搜索得到的相关信息的商品列表
  productList: {}
}

const actions = {
  //异步获取商品列表数据
  async getProductList({
    commit
  }, options) {
    const result = await reqProductList(options)
    if (result.code === 200) {
      const productList = result.data
      commit('RECEIVE_PRODUCT_LIST', productList)
    }
  }
}

const mutations = {
  RECEIVE_PRODUCT_LIST(state, productList) {
    state.productList = productList
  }
}

const getters = {
  //品牌列表
  trademarkList(state) {
    return state.productList.trademarkList || []
  },

  //属性列表
  attrsList(state) {
    return state.productList.attrsList || []
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}