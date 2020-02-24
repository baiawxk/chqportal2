import Vue from 'vue'
import Vuex from 'vuex'

import d2admin from './modules/d2admin'
import chqadmin from './modules/chqadmin'
import shortcut from './modules/shortcut'
import menu from './menu.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    d2admin,
    chqadmin,
    shortcut,
    menu
  }
})