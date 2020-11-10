import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
  getUserInfo
} from "network/home";
Vue.use(VueRouter)

// const active = () => import("views/SkillBag/ChildComponents/ActiveItem");
// const mysize = () => import("views/SkillBag/ChildComponents/MySize");
// const rankinglist = () => import("views/SkillBag/ChildComponents/RankingList");


const active = () => import("components/skillbags/ActiveConfirm")
const mysize = () => import("components/skillbags/MySizes")
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
    component: () => import( /* webpackChunkName: "about" */ '../views/Index')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home')
  },
  // {
  //   path: '/skillbag',
  //   name: 'skillbag',
  //   redirect: "/active",
  //   component: () => import( /* webpackChunkName: "about" */ '../views/SkillBag'),
  //   children: [{
  //     path: "/active",
  //     component: active,
  //   }, {
  //     path: "/mysize",
  //     component: mysize,
  //   }, {
  //     path: "/rankinglist",
  //     component: rankinglist,
  //   }]
  // },
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
    path: '/mysize',
    name: 'mysize',
    component: mysize
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
  console.log(to);
  let tokens;
  // 判断是否tokens过期
  document.cookie.split(";").forEach(val => {
    if (val.split("=")[0] == "tokens") {
      tokens = val.split("=")[1];
    }
  })
  if (!window.localStorage.getItem("token") || window.localStorage.getItem("token") == "undefined") {
    // 判断用户分享给好友情况下，没有登陆跳到首页登录 
    window.location.href = "http://tm.lilanz.com/game/wxOauth?backUrl=http://tm.lilanz.com/qywx/test/small/index.html&configKey=3";
  } else {
    next();
  }
})

router.afterEach(() => {
  NProgress.done()
})
// })const routerPush = VueRouter.prototype.push
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export default router
