<template>
  <d2-container>
    <el-tabs
      v-model="activeName"
      type="border-card"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="FTP"
        name="first"
      >
        <el-row :gutter="4">
          <el-col :span="4">

          </el-col>

        </el-row>

      </el-tab-pane>
      <el-tab-pane
        label="PUTTY"
        name="second"
      >配置管理</el-tab-pane>
      <el-tab-pane
        label="URL"
        name="third"
      >角色管理</el-tab-pane>
      <el-tab-pane
        label="OTHER"
        name="fourth"
      >定时任务补偿</el-tab-pane>
    </el-tabs>

  </d2-container>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>