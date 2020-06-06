import ajax from './ajax'

//登录：'/api/user/passport/login'
export function reqLogin(mobile,password) {
  return ajax.post('/user/passport/login',{mobile,password})
}

//首页三级分类:'/api/product/getBaseCategoryList' GET
export const reqCategorys = ()=>ajax('/product/getBaseCategoryList')