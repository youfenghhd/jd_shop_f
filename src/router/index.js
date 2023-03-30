import Vue from 'vue'
import VueRouter from 'vue-router'
import Comprehensive from '../views/Comprehensive'
import Admin from '../views/Admin'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../views/HomePage.vue'
import Cart from '../views/Cart.vue'
import Order from '../views/Order.vue'
import Alipay from '../views/Alipay.vue'
import AddOrder from '../components/AddOrder.vue'
Vue.use(VueRouter)

const routes = [
  //
  // {
  //   path: '/',
  //   name: 'app',
  //   component: () => import(/* webpackChunkName: "about" */ ),
  // }
  {
    path: '/',
    name: 'app',
    component: Comprehensive,
    children: [
      { path: "login", name: "Login", component: Login },
      { path: "register", name: "Register", component: Register },
    ]
  },
  {
    path: '/Home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
  {
    path: '/Alipay',
    name: 'Alipay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Alipay,
  },
  {
    path: '/Cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart,
  },{
    path: '/Order',
    name: 'Order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Order,
  },
  {
    path: '/AddOrder',
    name: 'AddOrder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddOrder,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    children: [
      // 用户管理子路由
      {
        path: "/userList",
        name: "userList",
        component: () => import('../components/UserList.vue')
      }, {
        path: "/CommodityList",
        name: "CommodityList",
        component: () => import('../components/CommodityList.vue')
      }, , {
        path: "/AddCommodity",
        name: "AddCommodity",
        component: () => import( /* webpackChunkName: "about" */
          '../components/AddCommodity.vue')
      }, {
        path: "/UpdateCommodity",
        name: "UpdateCommodity",
        component: () => import( /* webpackChunkName: "about" */
          '../components/UpdateCommodity.vue')
      }
    ]
  }

]
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 定义跳转虚拟进度条
router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})

export default router
