import Vue from 'vue'
import VueRouter from 'vue-router'
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
    meta: {
      canSearch: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/Home/childComponet/GiftPage')
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
  // console.log(to);
  // const routeArr=["/zeropage","/firstpage","/twopage","/threepage","/fourpage","/fivepage"]
  // if(from.path=="/zeropage"){
  //   alert("/defeat");
  //   next(false);
  // }else{
  //   next();
  // }
  // console.log(to);
  // if (to.meta.canSearch) {
  // next(false)
  // 这是 进行判断用户直接进行输入url后进行跳转
  // if (window.localStorage.getItem("activeItem") >= 0 && from.path == "/mysize" && to.path == "/active"){
  //   window.localStorage.setItem("activeItem", 2);
  // }
  // if (to.path == "/active") {
  //   window.localStorage.setItem("activeItem", 0);
  // }
  // if (to.path == "/rankinglist") {
  //   window.localStorage.setItem("activeItem", 1);
  // }
  // if (to.path == "/mysize") {
  //   window.localStorage.setItem("activeItem", 2);
  // }
  // }
  // if (!window.localStorage.getItem("token")) {
  //   getUserInfo().then((da) => {
  //     console.log(da)
  //     let data = {
  //       "errcode": 0,
  //       "data": {
  //         "id": "42166",
  //         "token": "fdfumFJvUztKCL6Nz80C",
  //         "openid": "oyLvDju5tyhnmIkzdO8XE1sjvUyg",
  //         "nickname": "诺颜",
  //         "sex": 1,
  //         "province": "福建",
  //         "city": "泉州",
  //         "country": "中国",
  //         "headimgurl": "https://thirdwx.qlogo.cn/mmopen/vi_32/2Y4DJfdXXrnde7Qt6ic45hxTZH2XhtelZ2DU10pAIliapicGu8QcnoF9cKwqN4kmJu4kutFSyKkibfmZ19ibPicZcuaQ/132",
  //         "unionid": "oarvQwwByo4DlWnIDRfmt6X-IsNg",
  //         "language": "zh_CN",
  //         "configKey": "3",
  //         "subscribeType": 0,
  //         "objectID": 10,
  //         "khid": 0,
  //         "mdid": 0,
  //         "isSubscribe": 0,
  //         "subscribeDate": null,
  //         "vipID": "0"
  //       },
  //       "errmsg": "用户的信息"
  //     };

  //     if (data.errcode == 0) {
  //       window.localStorage.setItem("userInfo", JSON.stringify(data.data));
  //     } else {

  //     }
  //   });
  // } else {
  //   next();
  // }
  console.log(2222);
  if (!window.localStorage.getItem("token")) {
    // 判断用户分享给好友情况下，则 好友 没有登陆跳到首页登录 
   window.location.href="/"
  }
  next();

})
// })const routerPush = VueRouter.prototype.push
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export default router
