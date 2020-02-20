<template>
  <d2-container type="card">
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
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

      <el-container>
        <el-header>
          <div>
            <el-row>
              <el-input></el-input>
            </el-row>
          </div>
        </el-header>
        <el-main>
          <el-row>
            <el-collapse>
              <el-collapse-item>
                <template slot="title">
                  fdslkafdsjfslj
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item
                title="反馈 Feedback"
                name="2"
              >
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item
                title="效率 Efficiency"
                name="3"
              >
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item
                title="可控 Controllability"
                name="4"
              >
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-row>

          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
          <h1>fdljsafjdsjfdsajf</h1>
        </el-main>
        <el-footer>
          fdsafdsafjdlsk
        </el-footer>
      </el-container>
    </el-container>
  </d2-container>
</template>
