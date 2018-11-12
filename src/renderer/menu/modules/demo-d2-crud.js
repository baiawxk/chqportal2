export default {
  path: '/demo/d2-crud',
  name: 'D2 CRUD',
  iconSvg: 'd2-crud',
  children: (pre => [
    { path: `${pre}index`, name: 'D2 CRUD 首页', icon: 'home' },
    {
      name: '基础功能',
      children: [
        { path: `${pre}demo1`, name: '基础表格' },
        { path: `${pre}demo2`, name: '带斑马纹表格' },
        { path: `${pre}demo3`, name: '带边框表格' },
        { path: `${pre}demo4`, name: '带状态表格' },
        { path: `${pre}demo5`, name: '固定表头' },
        { path: `${pre}demo6`, name: '固定列' },
        { path: `${pre}demo7`, name: '流体高度' },
        { path: `${pre}demo8`, name: '多级表头' },
        { path: `${pre}demo9`, name: '单选' },
        { path: `${pre}demo10`, name: '多选' },
        { path: `${pre}demo11`, name: '排序' },
        { path: `${pre}demo12`, name: '筛选' },
        { path: `${pre}demo13`, name: '表尾合计行' },
        { path: `${pre}demo14`, name: '合并行' },
        { path: `${pre}demo15`, name: '合并列' },
        { path: `${pre}demo24`, name: '表格slot' }
      ]
    },
    {
      name: '数据操作',
      children: [
        { path: `${pre}demo16`, name: '新增数据' },
        { path: `${pre}demo17`, name: '修改数据' },
        { path: `${pre}demo18`, name: '删除数据' },
        { path: `${pre}demo19`, name: '自定义操作列' },
        { path: `${pre}demo20`, name: '表单组件渲染' },
        { path: `${pre}demo21`, name: '表单布局' },
        { path: `${pre}demo22`, name: '表单校验' },
        { path: `${pre}demo23`, name: '表格内编辑' }
      ]
    }
  ])('/demo/d2-crud/')
}
