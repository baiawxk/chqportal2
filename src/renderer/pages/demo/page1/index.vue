<template>
  <d2-container>
    <template slot="header">导航</template>
    <!-- <template slot="footer">footer</template> -->

    <b-container class="bv-example-row">
      <div v-for="group in menuGroups" :key="group.index" class="m-1,p-3">
        <b-row>
          <b-alert variant="primary" show>{{group.name}}</b-alert>
        </b-row>
        <b-row>
          <!-- <b-button-group> -->
          <!-- <template v-for="(menu,index) in group.menus">
            <b-button :variant=" (index%2 == 0) ? 'success':'primary' " :key="index" @click="openMenu(menu.url)">{{menu.name
              || menu.title}}</b-button>
          </template> -->
          <b-list-group>
            <b-list-group-item :variant=" (index%2 == 0) ? '':'secondary' " button v-for="(menu,index) in group.menus" :key="index" @click="openMenu(menu.url)">
              {{menu.name || menu.title}}
           </b-list-group-item>
          </b-list-group>
          <!-- </b-button-group> -->
        </b-row>
        <br>
      </div>
    </b-container>
  </d2-container>
</template>

<script>
  import menuData from '@/menu/menuConfig'

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
            url: 'https://bootstrap-vue.js.org/docs/components/alert'
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

      let bookmark = {
        name: 'bookmark',
        menus: menuData
      }

      return {
        menuGroups: [devMenus, bookmark]
      }
    }
  }
</script>