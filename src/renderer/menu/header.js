import demos from './demos'

// 菜单 顶栏
export default [{
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      ...demos
    ]
  }
]