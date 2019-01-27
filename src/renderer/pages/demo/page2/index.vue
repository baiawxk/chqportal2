<template>
  <d2-container>
    <template slot="header">Todos</template>
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
              <el-menu-item-group>
                <template slot="title">Collect</template>
                <el-menu-item index="1">infobox</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">Focus</template>
                <el-menu-item index="2">Today</el-menu-item>
                <el-menu-item index="3">Next</el-menu-item>
                <el-menu-item index="4">Tomorrow</el-menu-item>
                <el-menu-item index="5">Schedule</el-menu-item>
                <el-menu-item index="6">Maybe</el-menu-item>
                <el-menu-item index="7">Wait</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Projects</span>
                </template>
                <el-menu-item index="9-1">选项1</el-menu-item>
                <el-menu-item index="9-2">选项2</el-menu-item>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Targets</span>
                </template>
                <el-menu-item index="10-1">选项1</el-menu-item>
                <el-menu-item index="10-2">选项2</el-menu-item>
              </el-submenu>
              <el-submenu index="11">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Situation</span>
                </template>
                <el-menu-item index="11-1">选项1</el-menu-item>
                <el-menu-item index="11-2">选项2</el-menu-item>
              </el-submenu>
              <el-submenu index="12">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Filters</span>
                </template>
                <el-menu-item index="12-1">选项1</el-menu-item>
                <el-menu-item index="12-2">选项2</el-menu-item>
              </el-submenu>
              <el-menu-item-group>
                <template slot="title">Finished</template>
                <el-menu-item index="13">Done</el-menu-item>
                <el-menu-item index="14">Trash</el-menu-item>
              </el-menu-item-group>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div>
          <el-input></el-input>
        </div>
        <br>
      </el-main>
    </el-container>
  </d2-container>
</template>
