<template>
  <d2-container>
    <template slot="header">My Bookmarks</template>
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item
                index="3"
                disabled
              >
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div>
          <el-input
            v-model="urlInput"
            @keyup.enter.native="addUrl"
          ></el-input>
        </div>
        <br>
        <div>
          <el-card>
            <template slot="header">Tags</template>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
          </el-card>
        </div>
        <br>
        <div>
          <el-card>
            <template slot="header"></template>
            <el-row
              v-for="menu in menus"
              :key="menu.id"
              @click.native="open(menu.url)"
            >
              <el-col>
                <el-alert
                  :closable="false"
                  :title="menu.title"
                  :description="menu.url"
                >
                </el-alert>
              </el-col>

            </el-row>

          </el-card>
        </div>
      </el-main>
    </el-container>
  </d2-container>
</template>

<script>
import _ from "lodash";

export default {
  name: "demo-page1",
  created: function() {
    console.log("created");
  },
  methods: {
    addUrl() {
      this.doUrl(this.urlInput);
      this.urlInput = "";
    },
    doUrl(url) {}
  },
  data: function() {
    let menus = this.$store.state.menu.menu;
    menus = _.filter(menus, menu => {
      return menu.title !== "";
    });

    return {
      menus,
      urlInput: "",
      urlList: {}
    };
  }
};
</script>