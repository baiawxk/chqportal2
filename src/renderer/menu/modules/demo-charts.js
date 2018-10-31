export default {
  path: '/demo/charts',
  name: '图表',
  icon: 'line-chart',
  children: (pre => [
    { path: `${pre}index`, name: '图表首页', icon: 'home' },
    {
      path: `${pre}list`,
      name: '图表',
      icon: 'cube',
      children: [
        {
          path: `${pre}list/line`,
          name: '折线图',
          children: [
            { path: `${pre}list/line/demo1`, name: '一般' },
            { path: `${pre}list/line/demo2`, name: '横坐标倾斜' },
            { path: `${pre}list/line/demo3`, name: '堆叠面积图' },
            { path: `${pre}list/line/demo4`, name: '显示数值' },
            { path: `${pre}list/line/demo5`, name: '设置别名' }
          ]
        },
        {
          path: `${pre}list/histogram`,
          name: '柱状图',
          children: [
            { path: `${pre}list/histogram/demo1`, name: '一般' },
            { path: `${pre}list/histogram/demo2`, name: '指标维度' },
            { path: `${pre}list/histogram/demo3`, name: '混合图表' },
            { path: `${pre}list/histogram/demo4`, name: '堆叠柱状图' },
            { path: `${pre}list/histogram/demo5`, name: '显示数值' },
            { path: `${pre}list/histogram/demo6`, name: '横轴连续' }
          ]
        },
        {
          path: `${pre}list/bar`,
          name: '条形图',
          children: [
            { path: `${pre}list/bar/demo1`, name: '一般' },
            { path: `${pre}list/bar/demo2`, name: '指标维度' },
            { path: `${pre}list/bar/demo3`, name: '排序条形图' },
            { path: `${pre}list/bar/demo4`, name: '堆叠条形图' },
            { path: `${pre}list/bar/demo5`, name: '纵轴连续' }
          ]
        },
        {
          path: `${pre}list/pie`,
          name: '饼图',
          children: [
            { path: `${pre}list/pie/demo1`, name: '一般' },
            { path: `${pre}list/pie/demo2`, name: '指标维度' },
            { path: `${pre}list/pie/demo3`, name: '玫瑰图' },
            { path: `${pre}list/pie/demo4`, name: '限制条数' },
            { path: `${pre}list/pie/demo5`, name: '多圆饼图' },
            { path: `${pre}list/pie/demo6`, name: '设置半径' }
          ]
        },
        {
          path: `${pre}list/ring`,
          name: '环图',
          children: [
            { path: `${pre}list/ring/demo1`, name: '一般' },
            { path: `${pre}list/ring/demo2`, name: '指标维度' },
            { path: `${pre}list/ring/demo3`, name: '玫瑰图' },
            { path: `${pre}list/ring/demo4`, name: '限制显示条数' },
            { path: `${pre}list/ring/demo5`, name: '设置半径' }
          ]
        },
        {
          path: `${pre}list/waterfall`,
          name: '瀑布图',
          children: [
            { path: `${pre}list/waterfall/demo1`, name: '一般' }
          ]
        },
        {
          path: `${pre}list/funnel`,
          name: '漏斗图',
          children: [
            { path: `${pre}list/funnel/demo1`, name: '一般' },
            { path: `${pre}list/funnel/demo2`, name: '金字塔' }
          ]
        },
        {
          path: `${pre}list/radar`,
          name: '雷达图',
          children: [
            { path: `${pre}list/radar/demo1`, name: '一般' }
          ]
        },
        {
          path: `${pre}list/map`,
          name: '地图',
          children: [
            { path: `${pre}list/map/demo1`, name: '一般' },
            { path: `${pre}list/map/demo2`, name: '设置城市' },
            { path: `${pre}list/map/demo3`, name: '设置样式' }
          ]
        },
        {
          path: `${pre}list/sankey`,
          name: '桑基图',
          children: [
            { path: `${pre}list/sankey/demo1`, name: '一般' }
          ]
        },
        {
          path: `${pre}list/heatmap`,
          name: '热力图',
          children: [
            { path: `${pre}list/heatmap/demo1`, name: '一般' },
            { path: `${pre}list/heatmap/demo2`, name: '地图热力图' }
          ]
        },
        {
          path: `${pre}list/scatter`,
          name: '散点图',
          children: [
            { path: `${pre}list/scatter/demo1`, name: '单维度多指标' },
            { path: `${pre}list/scatter/demo2`, name: '双维度多指标' }
          ]
        },
        {
          path: `${pre}list/candle`,
          name: 'K线图',
          children: [
            { path: `${pre}list/candle/demo1`, name: '一般' },
            { path: `${pre}list/candle/demo2`, name: 'MA VOL' },
            { path: `${pre}list/candle/demo3`, name: '自定义' }
          ]
        },
        {
          path: `${pre}list/gauge`,
          name: '仪表盘',
          children: [
            { path: `${pre}list/gauge/demo1`, name: '一般' }
          ]
        },
        {
          path: `${pre}list/tree`,
          name: '树图',
          children: [
            { path: `${pre}list/tree/demo1`, name: '径向树图' }
          ]
        }
      ]
    }
  ])('/demo/charts/')
}
