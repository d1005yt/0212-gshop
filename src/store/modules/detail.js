import {
  reqDetailInfo
} from '@/api'

const state = {
  //搜索得到的相关信息的商品详情
  detailInfo: {}
}

const actions = {
  //异步获取商品详情数据
  async getDetailInfo({
    commit
  }, skuId) {
    const result = await reqDetailInfo(skuId)
    if (result.code === 200) {
      const detailInfo = result.data
      commit('RECEIVE_DETAIL_INFO', detailInfo)
    }
  }
}

const mutations = {
  RECEIVE_DETAIL_INFO(state, detailInfo) {
    state.detailInfo = detailInfo
  }
}

const getters = {
  categoryView(state) {
    return state.detailInfo.categoryView ? state.detailInfo.categoryView : {}
  },

  skuInfo(state) {
    return state.detailInfo.skuInfo ? state.detailInfo.skuInfo : {}
  },

  skuImageList(state) {
    const skuInfo = state.detailInfo.skuInfo
    return skuInfo ? skuInfo.skuImageList : []
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}