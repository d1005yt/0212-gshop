import {
  reqShopCart,
  reqAddToCart,
  reqCheckCartItem,
  reqDeleteCartItem
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

  async deleteCartItem({
      commit
    },
    skuId
  ) {
    const result = await reqDeleteCartItem(skuId)
    if (result.code === 200) {
      //通知组件成功了,不传参数
      return undefined //promise成功了，value为undefined
    } else {
      throw new Error('删除失败')
    }
  },


  async checkCartItem({
    commit
  }, {
    skuId,
    isChecked
  }) {
    const result = await reqCheckCartItem(skuId, isChecked)
    if (result.code !== 200) {
      throw new Error(result.message || '选中商品失败')
    }
  },

  async deleteCheckedItem({
    state,
    dispatch
  }) {
    const promise=state.cartList.reduce((pre,item)=>{
      if(item.isChecked===1){
        pre.push(dispatch('deleteCartItem',item.skuId))
      }
      return pre
    },[])
    return Promise.all(promise)
  },

  async checkAllCartItems({
      commit,
      state,
      dispatch
    },
    checked
  ) {
    const isChecked = checked ? '1' : '0'
    let promises = []
    //遍历每个购物项
    state.cartList.forEach(item => {
      //购物项的状态与目标状态不一致
      if (item.isChecked !== isChecked) {
        //分发给checkCartItem，得到其返回的promise对象
        const promise = dispatch('checkCartItem', {
          skuId: item.skuId,
          isChecked
        })
        promises.push(promise)
      }
    })
    //请求已经发出去了
    //返回的promise对象，只有所有的请求都发送成功了，才会成功
    return Promise.all(promises)
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
const getters = {
  //选中总数量
  totalCount(state) {
    //reduce()
    return state.cartList.reduce((preTotal, item, index) => preTotal + (item.isChecked === 1 ? item.skuNum : 0), 0)
  },

  //选中总价格
  totalPrice(state) {
    //reduce()
    return state.cartList.reduce((preTotal, item, index) => preTotal + (item.isChecked === 1 ? item.skuNum : 0) * item.skuPrice, 0)
  },

  //是否全选
  isCheckAll(state) {
    //如果数组中每个都选中 就返回true，否则是false
    return state.cartList.length > 0 && state.cartList.every((item, index) => item.isChecked === 1)
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}