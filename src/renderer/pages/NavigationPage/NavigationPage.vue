<template>
  <d2-container>
    <template slot="header">test header</template>
    <template slot="footer">test footer</template>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-button type="success" @click="visible = true">Button</el-button>
          <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element</p>
          </el-dialog>
        </div>
      </el-col>
    </el-row>

  </d2-container>
</template>

<script>
  export default {
    // 如果需要缓存页面
    // name 字段需要设置为和本页路由 name 字段一致
    name: "NavigationPage",
    data: function () {
      return {
        visible: false
      };
    },
    components: {}
  };
</script>