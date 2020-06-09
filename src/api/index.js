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