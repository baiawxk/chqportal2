import layoutHeaderAside from '@/layout/header-aside'

const meta = {
  requiresAuth: false
}

let demoNum = 30
let demos = []
for (let i = 0; i < demoNum; i++) {
  demos.push({
    path: `page${i + 1}`,
    name: `demo-page${i + 1}`,
    component: () => import(`@/pages/demo/page${i + 1}`),
    meta: {
      meta,
      title: `demo ${i + 1}`
    }
  })
}

export default {
  path: '/demo',
  name: 'demo',
  meta,
  redirect: {
    name: 'demo-page1'
  },
  component: layoutHeaderAside,
  children: (pre => [...demos])('demo-')
}
