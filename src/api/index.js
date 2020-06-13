import ajax from './ajax'
import mockAjax from './mockAjax'

//登录：'/api/user/passport/login'
export function reqLogin(mobile, password) {
  return ajax.post('/user/passport/login', {
    mobile,
    password
  })
}

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
export const reqCheckChartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)