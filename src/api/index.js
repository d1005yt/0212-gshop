import ajax from './ajax'
import mockAjax from './mockAjax'


//首页三级分类:'/api/product/getBaseCategoryList' GET
export const reqCategoryList = () => ajax('/product/getBaseCategoryList')

//访问moke接口的请求函数
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
export const reqTodays = () => mockAjax('/todays')



export const reqProductList = (options) => ajax.post('/list', options)
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)

export const reqShopCart = () => ajax.get('/cart/cartList')
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)
export const reqCheckCartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)

//登录：'/api/user/passport/login'
export function reqLogin(mobile, password) {
  return ajax.post('/user/passport/login', {
    mobile,
    password
  })
}

//注册：'/api/user/passport/register'
export const reqRegister = (userInfo) => ajax.post('/user/passport/register', userInfo)

//退出登陆
export const reqLogout = () => ajax('/user/passport/logout')

//获取订单列表
export const reqOrders = (page, limit) => ajax(`/order/auth/${page}/${limit}`)

//获取订单交易
export const reqTradeInfo = () => ajax('/order/auth/trade')

//提交订单交易
export const reqSubmitOrder = (tradeNo, orderInfo) => ajax({
  url: '/order/auth/submitOrder',
  method: 'POST',
  params: {
    tradeNo
  },
  data: orderInfo //指定请求体数据对象 包含订单
})

//获取支付信息
export const reqPayInfo = (orderId) => ajax(`/payment/weixin/createNative/${orderId}`)

//获取订单信息
export const reqOrderStatue = (orderId) => ajax(`/payment/weixin/queryPayStatus/${orderId}`)