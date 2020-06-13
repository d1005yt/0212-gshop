import Home from '../pages/Home'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '@/pages/Login'
// import router from '.'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

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
    }
  },

  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess
  },
  {
    path: '/shopcart',
    component: ShopCart
  }
]