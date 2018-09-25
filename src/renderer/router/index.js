import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pockage-page',
      component: require('@/components/PockagePage').default
    },
    {
      path: '/test-page',
      name: 'test-page',
      component: require('@/components/TestPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
