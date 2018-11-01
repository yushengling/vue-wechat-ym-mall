import 'amfe-flexible'
import 'animate.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueVirtualScroller from 'vue-virtual-scroller'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Search, Lazyload, Row, Col, Tag } from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

sync(store, router)

Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Search)
Vue.use(Tag)
Vue.use(Lazyload)
Vue.use(Row).use(Col)
Vue.use(VueVirtualScroller)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
