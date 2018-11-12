export default {
  path: '/demo/element',
  name: '基础组件库',
  icon: 'cubes',
  children: (pre => [
    { path: `${pre}index`, name: '基础组件库首页', icon: 'home' },
    {
      path: `${pre}basic`,
      name: '基础',
      icon: 'cube',
      children: [
        { path: `${pre}basic-layout`, name: '布局' },
        { path: `${pre}basic-container`, name: '布局容器' },
        { path: `${pre}basic-color`, name: '色彩' },
        { path: `${pre}basic-typography`, name: '字体' },
        { path: `${pre}basic-icon`, name: '图标' },
        { path: `${pre}basic-button`, name: '按钮' }
      ]
    },
    {
      path: `${pre}form`,
      name: '表单',
      icon: 'check-square-o',
      children: [
        { path: `${pre}form-radio`, name: '单选框' },
        { path: `${pre}form-checkbox`, name: '多选框' },
        { path: `${pre}form-input`, name: '输入框' },
        { path: `${pre}form-input-number`, name: '计数器' },
        { path: `${pre}form-select`, name: '选择器' },
        { path: `${pre}form-cascader`, name: '级联选择器' },
        { path: `${pre}form-switch`, name: '开关' },
        { path: `${pre}form-slider`, name: '滑块' },
        { path: `${pre}form-time-picker`, name: '时间选择器' },
        { path: `${pre}form-date-picker`, name: '日期选择器' },
        { path: `${pre}form-datetime-picker`, name: '日期时间选择器' },
        { path: `${pre}form-upload`, name: '上传' },
        { path: `${pre}form-rate`, name: '评分' },
        { path: `${pre}form-color-picker`, name: '颜色选择器' },
        { path: `${pre}form-transfer`, name: '穿梭框' },
        { path: `${pre}form-form`, name: '表单' }
      ]
    },
    {
      path: `${pre}data`,
      name: '数据',
      icon: 'table',
      children: [
        { path: `${pre}data-table`, name: '表格' },
        { path: `${pre}data-tag`, name: '标签' },
        { path: `${pre}data-progress`, name: '进度条' },
        { path: `${pre}data-tree`, name: '树形控件' },
        { path: `${pre}data-pagination`, name: '分页' },
        { path: `${pre}data-badge`, name: '标记' }
      ]
    },
    {
      path: `${pre}notice`,
      name: '消息',
      icon: 'commenting',
      children: [
        { path: `${pre}notice-alert`, name: '警告' },
        { path: `${pre}notice-loading`, name: '加载' },
        { path: `${pre}notice-message`, name: '消息提示' },
        { path: `${pre}notice-message-box`, name: '弹框' },
        { path: `${pre}notice-notification`, name: '通知' }
      ]
    },
    {
      path: `${pre}navigation`,
      name: '导航',
      icon: 'map',
      children: [
        { path: `${pre}navigation-menu`, name: '导航菜单' },
        { path: `${pre}navigation-tabs`, name: '标签页' },
        { path: `${pre}navigation-breadcrumb`, name: '面包屑' },
        { path: `${pre}navigation-dropdown`, name: '下拉菜单' },
        { path: `${pre}navigation-steps`, name: '步骤条' }
      ]
    },
    {
      path: `${pre}others`,
      name: '其它',
      icon: 'cubes',
      children: [
        { path: `${pre}others-dialog`, name: '对话框' },
        { path: `${pre}others-tooltip`, name: '文字提示' },
        { path: `${pre}others-popover`, name: '弹出框' },
        { path: `${pre}others-card`, name: '卡片' },
        { path: `${pre}others-carousel`, name: '走马灯' },
        { path: `${pre}others-collapse`, name: '折叠面板' }
      ]
    }
  ])('/demo/element/')
}
