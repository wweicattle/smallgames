import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const active = () => import("views/SkillBag/ChildComponents/ActiveItem");
const mysize = () => import("views/SkillBag/ChildComponents/MySize");
const rankinglist = () => import("views/SkillBag/ChildComponents/RankingList");






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
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Home')
  },
  {
    path: '/skillbag',
    name: 'skillbag',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    redirect: "/active",
    component: () => import( /* webpackChunkName: "about" */ '../views/SkillBag'),
    children: [{
      path: "/active",
      component: active,
    }, {
      path: "/mysize",
      component: mysize,
    }, {
      path: "/rankinglist",
      component: rankinglist,
    }]
  },
  {
    path: '/gift',
    name: 'gift',
    meta: {
      canSearch: true
    },
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Home/childComponet/GiftPage')
  },
  {
    path: '/firstpage',
    name: 'firstpage',
    //   // this generates a separate chunk (about.[hash].js) for this route

    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../components/FirstPage')
  },
  {
    path: '/checkoutpoint',
    name: 'checkoutpoint',
    //   // this generates a separate chunk (about.[hash].js) for this route

    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../components/SelectCheckPoint')
  },
  {
    path: '/regularpage',
    name: 'regularpage',
    //   // this generates a separate chunk (about.[hash].js) for this route

    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Home/childComponet/RegularPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.canSearch) {
//     next(false)
//   }else{
//     next();
//   }
// })const routerPush = VueRouter.prototype.push
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export default router
