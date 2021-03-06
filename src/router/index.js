import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const active = () => import("components/skillbags/ActiveConfirm")
const ranklist = () => import("components/skillbags/RankingList")
const luckpeople = () => import("components/skillbags/LuckPeople")








const routes = [{
    path: '/',
    name: 'index',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'index',
    meta:{
      sd:3434
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/Index')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home')
  },

  {
    path: '/gift',
    name: 'gift',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home/childComponet/GiftPage')
  },
  {
    path: '/giftresult',
    name: 'giftresult',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home/childComponet/GiftResult')
  },
  {
    path: '/zeropage',
    name: 'zeropage',
    component: () => import( /* webpackChunkName: "about" */ '../components/ZeroPage')
  },
  {
    path: '/firstpage',
    name: 'firstpage',
    component: () => import( /* webpackChunkName: "about" */ '../components/FirstPage')
  },
  {
    path: '/twopage',
    name: 'twopage',
    component: () => import( /* webpackChunkName: "about" */ '../components/TwoPage')
  },
  {
    path: '/threepage',
    name: 'threepage',
    component: () => import( /* webpackChunkName: "about" */ '../components/ThreePage')
  },
  {
    path: '/fourpage',
    name: 'fourpage',
    component: () => import( /* webpackChunkName: "about" */ '../components/FourPage')
  },
  {
    path: '/fivepage',
    name: 'fivepage',
    component: () => import( /* webpackChunkName: "about" */ '../components/FivePage')
  },
  {
    path: '/addYearPage',
    name: 'addYearPage',
    component: () => import( /* webpackChunkName: "about" */ '../components/AddYearPoint')
  },
  {
    path: '/addYearPageTwo',
    name: 'addYearPageTwo',
    component: () => import( /* webpackChunkName: "about" */ '../components/AddYearPointTwo')
  },
  {
    path: '/checkoutpoint',
    name: 'checkoutpoint',
    component: () => import( /* webpackChunkName: "about" */ '../components/SelectCheckPoint')
  },
  {
    path: '/regularpage',
    name: 'regularpage',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home/childComponet/RegularPage')
  },
  {
    path: '/active',
    name: 'active',
    component: active
  },
  {
    path: '/ranklist',
    name: 'ranklist',
    component: ranklist
  },
  {
    path: '/luckpeople',
    name: 'luckpeople',
    component: luckpeople,
  }
]
console.log(__dirname);
const router = new VueRouter({
  // mode: 'history',
  // base: "/web_tlerp/QYWX/Test/wwcattle/",
  routes
})
router.beforeEach((to, from, next) => {
  // console.log(to,from);
  // 判断过期 
  if (!window.localStorage.getItem("token") || window.localStorage.getItem("token") == "undefined") {
    // 保存主页地址
    let src = window.location.origin + window.location.pathname;
    window.localStorage.setItem("initPage", src)
    // 判断用户分享给好友情况下，没有登陆跳到首页登录 
    window.location.href = "http://flh.lilanz.com/game/wxOauth?backUrl=" + src + "&configKey=3";
  } else {
    next();
  }
})

router.afterEach(() => {
  NProgress.done()
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export default router
