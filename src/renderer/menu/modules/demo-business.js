export default {
  path: '/demo/business',
  name: '示例',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, name: '示例首页', icon: 'home' },
    {
      name: '表格',
      icon: 'table',
      children: [
        { path: `${pre}table/1`, name: '表格 1' }
      ]
    }
  ])('/demo/business/')
}
