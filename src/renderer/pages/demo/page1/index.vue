<template>
  <d2-container>
    <!-- <template slot="header">导航</template> -->
    <!-- <template slot="footer">footer</template> -->

    <b-container class="bv-example-row">
      <div v-for="group in menuGroups" :key="group.index">
        <div>
          <b-row>
            <h4>{{group.name}}</h4>
          </b-row>
        </div>
        <div>
          <b-row>
            <b-button-group>
              <template v-for="(menu,index) in group.menus">
                <b-button :variant=" (index%2 == 0) ? 'success':'primary' " :key="index" @click="openMenu(menu.url)">{{menu.name}}</b-button>
              </template>
            </b-button-group>
          </b-row>
        </div>
      </div>
    </b-container>
  </d2-container>
</template>

<script>
  export default {
    name: 'page1',
    data: function () {
      let devMenus = {
        name: '本软件常用的API网站',
        menus: [{
            name: 'Element UI',
            url: 'http://element-cn.eleme.io/#/zh-CN/component/layout'
          },
          {
            name: 'D2Admin',
            url: 'https://d2-projects.github.io/d2-admin-doc/zh/learn-guide/getting-started.html#%E6%95%88%E6%9E%9C'
          },
          {
            name: 'Bootstrap-Vue',
            url: 'https://B-vue.js.org/'
          },
          {
            name: 'Bootstrap 4',
            url: 'https://v4.bootcss.com/'
          },
          {
            name: 'Electron',
            url: 'https://electronjs.org/docs'
          },
          {
            name: 'Vue',
            url: 'https://cn.vuejs.org/'
          }
        ]
      }
      // console.log(devMenus);
      return {
        menuGroups: [devMenus]
      }
    }
  }
</script>