import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ './views/Home')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "About" */ './views/About')
    },
    {
      path: '/classify',
      name: 'Classify',
      component: () => import(/* webpackChunkName: "Classify" */ './views/Classify')
    },
    {
      path: '/group',
      name: 'Group',
      component: () => import(/* webpackChunkName: "Group" */ './views/Group')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import(/* webpackChunkName: "Mine" */ './views/Mine')
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: () => import(/* webpackChunkName: "ShopCart" */ './views/ShopCart')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import(/* webpackChunkName: "Search" */ './views/Search')
    },
    {
      path: '/category/:CategoryID',
      name: 'Category',
      component: () => import(/* webpackChunkName: "Category" */ './views/Category')
    },
    {
      path: '/*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "NotFound" */ './views/NotFound')
    }
  ]
  // scrollBehavior (to, from, savedPosition) {
  //   console.log(savedPosition)
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})
