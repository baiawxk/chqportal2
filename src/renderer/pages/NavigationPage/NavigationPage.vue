<template>
  <d2-container>
    <template slot="header">test header</template>
    <template slot="footer">test footer</template>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </d2-container>
</template>

<script>
export default {
  // 如果需要缓存页面
  // name 字段需要设置为和本页路由 name 字段一致
  name: "NavigationPage",
  data: function() {
    return { visible: false };
  },
  components: {}
};
</script>
