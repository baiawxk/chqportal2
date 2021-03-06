import util from '@/libs/util'

export default {
  install (Vue, options) {
    // 1. 添加全局方法或属性
    // Vue.myGlobalMethod = function () {
    //   // 逻辑...
    // }

    // 2. 添加全局资源
    // Vue.directive('my-directive', {
    //   bind (el, binding, vnode, oldVnode) {
    //     // 逻辑...
    //   }
    //   ...
    // })
    // 3. 注入组件
    Vue.mixin({
      methods: {
        openMenu (index, indexPath) {
          if (/^https:\/\/|http:\/\//.test(index)) {
            util.open(index)
          } else {
            this.$router.push({
              path: index
            })
          }
        }
      }
    })

    // 4. 添加实例方法
    // Vue.prototype.$myMethod = function (methodOptions) {
    //   // 逻辑...
    // }
  }
}
