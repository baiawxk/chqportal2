import opn from 'opn'
import uuid from 'uuid/v1'
import iconv from 'iconv-lite'
import gbk from 'gbk-string'

export default {
  install(Vue, options) {
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
        uuid,
        opn,
        encodeURIgbk(str) {
          return gbk.encodeGBK(str)
        },
        open(index, indexPath) {
          if (/^https:\/\/|http:\/\//.test(index)) {
            opn(index)
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