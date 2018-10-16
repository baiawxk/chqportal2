<template>
  <d2-container>
    <!-- <template slot="header">Page 1 header</template>
    Hello World
    <template slot="footer">footer</template> -->
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container> -->
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" >
            <!-- <template v-for="group in menuGroups"> -->
              <el-card class="box-card" v-for="group in menuGroups" :key="group.index"> 
                <div slot="header" class="clearfix">
                  <span>{{group.name}}</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="menu in group.menus" :key="menu.index" class="text item">
                  <el-button plain @click="openMenu(menu.url)">{{menu.name}}</el-button>
                </div>
              </el-card>
            <!-- </template> -->

            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </d2-container>
</template>

<script>
  export default {
    name: "page1",
    data: function () {
      let devMenus = {
        name: 'DEV Menus',
        menus: [{
            name: "Element UI",
            url: "http://element-cn.eleme.io/#/zh-CN/component/layout"
          },
          {
            name: "D2Admin",
            url: "https://d2-projects.github.io/d2-admin-doc/zh/learn-guide/getting-started.html#%E6%95%88%E6%9E%9C"
          }
        ]
      }
      // console.log(devMenus);
      return {
        menuGroups: [devMenus]
      }
    }
  };
</script>