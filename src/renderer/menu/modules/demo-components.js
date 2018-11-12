export default {
  path: '/demo/components',
  name: '内置组件',
  icon: 'puzzle-piece',
  children: (pre => [
    { path: `${pre}index`, name: '扩展组件首页', icon: 'home' },
    {
      path: `${pre}container`,
      name: '布局容器',
      icon: 'window-restore',
      children: [
        { path: `${pre}container/full`, name: '填充' },
        { path: `${pre}container/full-slot`, name: '填充 插槽' },
        { path: `${pre}container/full-bs`, name: '填充 滚动优化' },
        { path: `${pre}container/ghost`, name: '隐形' },
        { path: `${pre}container/ghost-slot`, name: '隐形 插槽' },
        { path: `${pre}container/ghost-bs`, name: '隐形 滚动优化' },
        { path: `${pre}container/card`, name: '卡片' },
        { path: `${pre}container/card-slot`, name: '卡片 插槽' },
        { path: `${pre}container/card-bs`, name: '卡片 滚动优化' }
      ]
    },
    {
      path: `${pre}layout/grid`,
      name: '高级布局',
      icon: 'tasks',
      children: [
        { path: `${pre}layout/grid`, name: '拖拽位置和大小' },
        { path: `${pre}layout/splitpane`, name: '区域划分' }
      ]
    },
    {
      path: `${pre}icon`,
      name: '图标',
      icon: 'star',
      children: [
        { path: `${pre}icon/icon`, name: '图标组件' },
        { path: `${pre}icon/list`, name: 'FontAwesome' },
        { path: `${pre}icon/select`, name: '图标选择器' },
        { path: `${pre}icon/svg`, name: 'SVG图标组件' }
      ]
    },
    {
      path: `${pre}markdown`,
      name: 'markdown 解析',
      icon: 'file-text-o',
      children: [
        { path: `${pre}markdown/source`, name: '指定资源' },
        { path: `${pre}markdown/url`, name: '异步加载文件' }
      ]
    },
    {
      path: `${pre}contextmenu`,
      name: '右键菜单',
      icon: 'mouse-pointer',
      children: [
        { path: `${pre}contextmenu/simple`, name: '基础' },
        { path: `${pre}contextmenu/divier`, name: '分割线' },
        { path: `${pre}contextmenu/group`, name: '按钮组' },
        { path: `${pre}contextmenu/submenu`, name: '子菜单' },
        { path: `${pre}contextmenu/disabled`, name: '禁用' },
        { path: `${pre}contextmenu/custom-trigger`, name: '自定义事件' }
      ]
    },
    { path: `${pre}countup`, name: '数字动画', icon: 'motorcycle' },
    { path: `${pre}editor-quill`, name: '富文本编辑器', icon: 'pencil-square-o (edit, edit)' },
    { path: `${pre}editor-simpleMDE`, name: 'markdown编辑器', icon: 'font' },
    { path: `${pre}highlight`, name: '代码高亮显示', icon: 'code' },
    { path: `${pre}json-tree`, name: 'JSON 展示', icon: 'sitemap' }
  ])('/demo/components/')
}
