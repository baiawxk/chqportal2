// 插件
import demoPlugins from './modules/demo-plugins'
// 组件
import demoComponents from './modules/demo-components'
// 组件
import demoCharts from './modules/demo-charts'
// 组件库
import demoElement from './modules/demo-element'
// 试验台
import demoPlayground from './modules/demo-playground'
// 示例
import demoBusiness from './modules/demo-business'
// CRUD
import demoD2Crud from './modules/demo-d2-crud'
// 第三方网页
import demoFrame from './modules/demo-frame'

import demos from './demos'

// let demoNum = 30
// let demos = []
// for (let i = 0; i < demoNum; i++) {
//   demos.push({
//     path: `/demo/page${i + 1}`,
//     title: `demo ${i + 1}`
//   })
// }

// const menuAside = [
//   demoComponents,
//   demoPlugins,
//   demoCharts,
//   demoElement,
//   demoPlayground,
//   demoBusiness,
//   demoD2Crud,
//   demoFrame
// ]

// 菜单 侧边栏
export default [{
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'home'
  },
  {
    path: '/searchmv',
    title: 'searchmv',
    icon: 'home'
  },
  // ...menuAside,
  // {
  //   title: '演示页面',
  //   icon: 'folder-o',
  //   children: [
  //     ...demos
  //   ]
  // }
]