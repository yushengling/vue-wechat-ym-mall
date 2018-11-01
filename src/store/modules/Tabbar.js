import { TABBAR_ACTIVE } from '@/store/mutation-types'

const state = {
  active: 0,
  fixed: false,
  zIndex: 1,
  tabbarList: [
    {
      title: '主页',
      icon: {
        normal: require('@/assets/images/Tabbar/home_light.png'),
        active: require('@/assets/images/Tabbar/home_fill_light.png')
      },
      dot: false,
      info: '', // string || number
      url: '',
      to: '/', // string || object
      replace: true
    },
    {
      title: '分类',
      icon: {
        normal: require('@/assets/images/Tabbar/sort.png'),
        active: require('@/assets/images/Tabbar/sort-select.png')
      },
      dot: false,
      info: '', // string || number
      url: '',
      to: '/classify', // string || object
      replace: true
    },
    {
      title: '拼团',
      icon: {
        normal: require('@/assets/images/Tabbar/groupbuy.png'),
        active: require('@/assets/images/Tabbar/groupbuy-select.png')
      },
      dot: false,
      info: '', // string || number
      url: '',
      to: '/group', // string || object
      replace: true
    },
    {
      title: '购物车',
      icon: {
        normal: require('@/assets/images/Tabbar/cart_light.png'),
        active: require('@/assets/images/Tabbar/cart_fill_light.png')
      },
      dot: false,
      info: '', // string || number
      url: '',
      to: '/shopcart', // string || object
      replace: true
    },
    {
      title: '我的',
      icon: {
        normal: require('@/assets/images/Tabbar/my_light.png'),
        active: require('@/assets/images/Tabbar/my_fill_light.png')
      },
      dot: false,
      info: '', // string || number
      url: '',
      to: '/mine', // string || object
      replace: true
    }
  ]
}

const getters = {

}

const actions = {

}

const mutations = {
  [TABBAR_ACTIVE] (state, payload) {
    state.active = payload.active
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
