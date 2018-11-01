import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Tabbar from './modules/Tabbar'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Tabbar
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
