let [TYPE_URL, TYPE_VUE_URL] = ['url', 'vue_url']

let menus = []
let urlMenus = require('./temp/output')

function initUrlMenus ({
  menus,
  type = TYPE_URL
}) {
  let newMenus = []
  menus.forEach(menu => {
    let icon = menu['icon']
    let attachAttrs = {}
    if (icon != null) {
      attachAttrs['iconDataUrl'] = icon
    }
    newMenus.push({
      ...menu,
      ...attachAttrs,
      path: menu['url'],
      type
    })
  })
  return newMenus
}

function initVueUrlMenus ({
  menus,
  type = TYPE_VUE_URL
}) {
  return []
}

function init () {
  return [...initUrlMenus({
    menus: urlMenus
  }), ...initVueUrlMenus({
    type: TYPE_VUE_URL
  })]
}

menus = init()

export default [
  ...menus
]
