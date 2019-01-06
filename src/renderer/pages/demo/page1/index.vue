<template>
  <d2-container>
    <template slot="header">导航</template>
    <el-container>
      <el-main>
        <p>Current Menus:{{menus.length}}</p><br>
        <el-row :gutter="12">
          <el-col
            :span="6"
            v-for="menu in menus"
            :key="menu.id"
          >
            <el-card
              shadow="hover"
              :body-style="{height:'120px'}"
              @click.native="open(menu.url)"
            >
              <header>{{menu.title}}</header>
            </el-card>
            <br>
          </el-col>
        </el-row>
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
  data: function() {
    let menus = this.$store.state.menu.menu;
    menus = _.filter(menus, menu => {
      return menu.title !== "";
    });

    return {
      menus
    };
  }
};
</script>