// import Home from '../pages/Home'
// import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '@/pages/Login'
// import router from '.'
// import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

const Home =()=> import('../pages/Home')
const Search =()=> import('../pages/Search')
const Detail =()=> import('@/pages/Detail')

import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupBuy from '@/pages/Center/GroupBuy'

import store from '@/store'

export default [{
    path: '/',
    component: Home
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
    props: route => ({
      keyword3: route.params.keyword,
      keyword4: route.params.keyword2
    })
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true
    },
    //登陆状态不能跳转到登陆界面
    // beforeEnter: (to, from, next) => {
    //   const token = store.state.user.userInfo.token
    //   if (token) {
    //     next('/')
    //   } else {
    //     next()
    //   }
    // }
  },

  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    //只有携带skuNum等参数的才可以跳转到加入购物车成功的页面
    beforeEnter: (to, from, next) => {
      const skuNum = to.query.skuNum
      const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
      if (skuNum && skuInfo instanceof Object) {
        next()
      } else {
        next('/shopcart')
      }
    }
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/trade',
    component: Trade,
    beforeEnter: (to, from, next) => {
      if (from.path === '/shopcart') {
        next()
      } else {
        next('/shopcart')
      }
    }
  },
  {
    path: '/pay',
    component: Pay,
    beforeEnter: (to, from, next) => {
      if (from.path === '/trade') {
        next()
      } else {
        next('/trade')
      }
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    beforeEnter: (to, from, next) => {
      if (from.path === '/pay') {
        next()
      } else {
        next('/pay')
      }
    }
  },
  {
    path: '/center',
    component: Center,
    children: [{
        path: '/center/myorder',
        component: MyOrder
      },
      {
        path: '/center/groupbuy',
        component: GroupBuy
      },
      {
        path: '',
        redirect: '/center/myorder'
      }
    ]
  }
]