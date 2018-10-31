// polyfill
import 'babel-polyfill'
// Vue
import Vue from 'vue'
import App from './App'
// store
import store from '@/store/index'
// 模拟数据
import '@/mock'
// 多国语
import i18n from './i18n'
// 核心插件
import d2Admin from '@/plugin/d2admin'

// [ 可选插件组件 ]D2-Crud
import D2Crud from '@d2-projects/d2-crud'
// [ 可选插件组件 ] 图表
import VCharts from 'v-charts'
// [ 可选插件组件 ] 右键菜单
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
// [ 可选插件组件 ] JSON 树状视图
import vueJsonTreeView from 'vue-json-tree-view'
// [ 可选插件组件 ] 网格布局组件
import { GridLayout, GridItem } from 'vue-grid-layout'
// [ 可选插件组件 ] 区域划分组件
import SplitPane from 'vue-splitpane'

// 菜单和路由设置
import router from './router'
import menuHeader from '@/menu/header'
import menuAside from '@/menu/aside'
// import menuData from '@/menu/menuConfig'
import { frameInRoutes } from '@/router/routes'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// import 'element-ui/lib/theme-chalk/display.css'
// http://element-cn.eleme.io/#/zh-CN/component/layout
// import 'element-ui/lib/theme-chalk/display.css'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import helper from './plugin/helper'

import Buefy from 'buefy'
// import { Table } from 'buefy/dist/components/table'
// import { Input } from 'buefy/dist/components/input'
import 'buefy/dist/buefy.css'
// import 'material-design-icons/iconfont/material-icons.css'
// https://buefy.github.io/documentation/start
Vue.use(Buefy, {
  defaultIconPack: 'mdi'
  // defaultContainerElement: '#content'
})
// Vue.component('b-table', Table)
// Vue.component('b-input', Input)

// 核心插件
Vue.use(d2Admin)
// Vue.use(ElementUI)
Vue.use(helper)
// Vue.use(BootstrapVue)

// 可选插件组件
// https://github.com/d2-projects/d2-crud
Vue.use(D2Crud)
Vue.use(VCharts)
Vue.use(contentmenu)
Vue.use(vueJsonTreeView)
Vue.component('d2-grid-layout', GridLayout)
Vue.component('d2-grid-item', GridItem)
Vue.component('SplitPane', SplitPane)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // 设置顶栏菜单
    this.$store.commit('d2admin/menu/headerSet', menuHeader)
    // 设置侧边栏菜单
    this.$store.commit('d2admin/menu/asideSet', menuAside)
    // 初始化菜单搜索功能
    this.$store.commit('d2admin/search/init', menuAside)
  },
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 检查最新版本
    this.$store.dispatch('d2admin/releases/checkUpdate')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
  // watch: {
  //   // 监听路由 控制侧边栏显示
  //   '$route.matched': {
  //     handler (val) {
  //       const _side = menuAside.filter(menu => val[0].path.indexOf(menu.path) == 0)// menu.path === val[0].path
  //       this.$store.commit('d2admin/menu/asideSet', _side.length > 0 ? _side[0].children : [])
  //     }
  //     // immediate: true
  //   }
  // }
}).$mount('#app')
