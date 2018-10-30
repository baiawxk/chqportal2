let demoNum = 30
let demos = []
for (let i = 0; i < demoNum; i++) {
  demos.push({
    path: `/demo/page${i + 1}`,
    title: `demo ${i + 1}`
  })
}

// 菜单 侧边栏
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
