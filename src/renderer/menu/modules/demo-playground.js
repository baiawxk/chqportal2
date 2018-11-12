export default {
  path: '/demo/playground',
  name: '试验台',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, name: '试验台首页', icon: 'home' },
    {
      name: 'svg 菜单图标',
      iconSvg: 'd2-admin',
      children: [
        { name: 'add', iconSvg: 'add' },
        { name: 'alarm', iconSvg: 'alarm' },
        { name: 'camera', iconSvg: 'camera' },
        { name: 'history', iconSvg: 'history' },
        { name: 'like', iconSvg: 'like' },
        { name: 'love', iconSvg: 'love' },
        { name: 'message', iconSvg: 'message' },
        { name: 'notice', iconSvg: 'notice' },
        { name: 'search', iconSvg: 'search' },
        { name: 'share', iconSvg: 'share' },
        { name: 'star', iconSvg: 'star' },
        { name: 'user', iconSvg: 'user' }
      ]
    },
    {
      name: '空菜单演示',
      icon: 'folder-o',
      children: [
        {
          name: '正在开发 1',
          children: [
            { name: '正在开发 1-1' },
            { name: '正在开发 1-2' }
          ]
        },
        { name: '正在开发 2' },
        { name: '正在开发 3' }
      ]
    },
    {
      path: `${pre}page-cache`,
      name: '页面缓存',
      icon: 'hdd-o',
      children: [
        { path: `${pre}page-cache/on`, name: '开启缓存' },
        { path: `${pre}page-cache/off`, name: '关闭缓存' }
      ]
    },
    {
      path: `${pre}page-argu`,
      name: '参数传递和留存',
      icon: 'assistive-listening-systems',
      children: [
        { path: `${pre}page-argu/send`, name: '发送' },
        { path: `${pre}page-argu/get/username-from-menu?userid=userid-from-menu`, name: '接收' }
      ]
    },
    {
      path: `${pre}store`,
      name: '全局状态管理',
      icon: 'bolt',
      children: [
        { path: `${pre}store/sys`, name: '系统状态', icon: 'microchip' },
        { path: `${pre}store/menu`, name: '菜单控制', icon: 'bars' },
        { path: `${pre}store/ua`, name: '浏览器信息', icon: 'info-circle' },
        { path: `${pre}store/gray`, name: '灰度模式', icon: 'eye' },
        { path: `${pre}store/fullscreen`, name: '全屏', icon: 'arrows-alt' },
        { path: `${pre}store/theme`, name: '主题', icon: 'diamond' },
        { path: `${pre}store/transition`, name: '页面过渡开关', icon: 'toggle-on' }
      ]
    },
    {
      path: `${pre}db`,
      name: '数据持久化',
      icon: 'database',
      children: [
        { path: `${pre}db/all`, name: '总览', icon: 'table' },
        { path: `${pre}db/public`, name: '公共存储', icon: 'users' },
        { path: `${pre}db/user`, name: '私有数据', icon: 'user' },
        { path: `${pre}db/page-public`, name: '路由存储', icon: 'file-o' },
        { path: `${pre}db/page-user`, name: '私有路由存储', icon: 'file-o' },
        { path: `${pre}db/page-snapshot-public`, name: '路由快照', icon: 'file' },
        { path: `${pre}db/page-snapshot-user`, name: '私有路由快照', icon: 'file' }
      ]
    },
    {
      path: `${pre}log`,
      name: '日志',
      icon: 'bullseye',
      children: [
        { path: `${pre}log/log`, name: '日志记录', icon: 'dot-circle-o' },
        { path: `${pre}log/error`, name: '错误捕捉', icon: 'bug' },
        { path: `${pre}log/console`, name: '控制台日志', icon: 'lightbulb-o' }
      ]
    },
    { path: `${pre}env`, name: '环境信息', icon: 'exclamation-circle' }
  ])('/demo/playground/')
}
