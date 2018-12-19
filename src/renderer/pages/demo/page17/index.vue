<template>
  <d2-container>
    <template slot="header">Page 3 header</template>
    <h1 class="d2-mt-0">主色</h1>

    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>卡片名称</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
        >操作按钮</el-button>
      </div>
      <div></div>
    </el-card>

    <template slot="footer">footer</template>
  </d2-container>
</template>

<script>
import menuData from "@/menu/temp/shouqu.json";

export default {
  name: "page17",
  data: function() {
    console.log(menuData);
    return menuData;
  }
};
</script>

