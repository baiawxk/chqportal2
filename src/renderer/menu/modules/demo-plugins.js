export default {
  path: '/demo/plugins',
  name: '插件',
  icon: 'plug',
  children: (pre => [
    { path: `${pre}index`, name: '插件首页', icon: 'home' },
    {
      path: `${pre}mock`,
      name: '模拟数据',
      icon: 'globe',
      children: [
        { path: `${pre}mock/ajax`, name: '拦截异步请求' },
        { path: `${pre}mock/dpd`, name: 'DPD 规则' },
        { path: `${pre}mock/dtd`, name: 'DTD 规则' }
      ]
    },
    {
      path: `${pre}import`,
      name: '导入',
      icon: 'download',
      children: [
        { path: `${pre}import/csv`, name: 'csv' },
        { path: `${pre}import/xlsx`, name: 'xlsx' }
      ]
    },
    {
      path: `${pre}export`,
      name: '导出',
      icon: 'upload',
      children: [
        { path: `${pre}export/table`, name: '表格' },
        { path: `${pre}export/txt`, name: '文本' }
      ]
    },
    {
      path: `${pre}i18n`,
      name: '多国语',
      icon: 'language',
      children: [
        { path: `${pre}i18n/demo1`, name: '示例1' },
        { path: `${pre}i18n/demo2`, name: '示例2' }
      ]
    },
    {
      path: `${pre}better-scroll`,
      name: '滚动扩展',
      icon: 'crosshairs',
      children: [
        { path: `${pre}better-scroll/base`, name: '基础用法' },
        { path: `${pre}better-scroll/to`, name: '滚动定位' }
      ]
    },
    { path: `${pre}clipboard-polyfill`, name: '剪贴板访问', icon: 'clipboard' },
    { path: `${pre}day`, name: '日期计算', icon: 'clock-o' },
    { path: `${pre}js-cookie`, name: 'Cookie 读写', icon: 'asterisk' }
  ])('/demo/plugins/')
}
