import {
  reqShopCart,
  reqAddToCart
} from '@/api'

const state = {
  cartList: []
}

const actions = {
  async getCartList({
    commit
  }) {
    const result = await reqShopCart()
    if (result.code === 200) {
      const cartList = result.data
      commit('RECEIVE_CART_LIST', cartList)
    }
  },

  async addToCart({
    commit
  }, {
    skuId,
    skuNum,
    callback
  }) {
    const result = await reqAddToCart(skuId, skuNum)
    if (result.code === 200) {
      //通知组件成功了,不传参数
      callback()
    } else {
      callback('添加失败')
    }
  },

  async addToCart2({
    commit
  }, {
    skuId,
    skuNum
  }) {
    const result = await reqAddToCart(skuId, skuNum)
    if (result.code === 200) {
      //通知组件成功了,不传参数
      return undefined //promise成功了，value为undefined
    } else {
      throw new Error('添加失败')
    }
  },

  async addToCart3({
    commit
  }, {
    skuId,
    skuNum
  }) {
    const result = await reqAddToCart(skuId, skuNum)
    if (result.code !== 200) {
      return '添加购物车失败' //promise是成功的，值是errorMsg
    } else {
      return undefined
    }
  }

}

const mutations = {
  RECEIVE_CART_LIST(state, cartList) {
    state.cartList = cartList
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}