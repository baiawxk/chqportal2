<template>
  <d2-container type="card">
    <template slot="header">Add URL</template>
    <div class="d2-mb">
      <el-input
        v-model="urlInput"
        @keyup.native.enter="addUrl"
      >
      </el-input>
    </div>
    <div v-if="list != null ">
      <el-table
        stripe
        height="400"
        :default-sort="{prop: 'ts'}"
        :data="list"
        row-key="id"
        style="width: 100%"
      >
        <el-table-column
          sortable
          label="Title"
          prop="title"
          width="240"
        >
        </el-table-column>
        <el-table-column
          sortable
          label="iconUrl"
          prop="iconUrl"
          width="240"
        >
        </el-table-column>
        <el-table-column
          sortable
          label="URL"
          prop="url"
          width="240"
        >
        </el-table-column>
        <el-table-column
          label="TIME"
          width="180"
        >
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ts | fromNow }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          width="240"
        >
          <template slot-scope="props">
            <el-button
              type="primary"
              @click="delItem(props.row)"
            >修改</el-button>
            <el-button
              type="primary"
              @click="delItem({id:props.row.id})"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </d2-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    let list = this.$store.state.chqadmin.url.data;
    return {
      urlInput: "",
      labels: [],
      table: [],
      list
    };
  },
  computed: {},
  methods: {
    ...mapGetters("chqadmin/url", ["find", "has"]),
    ...mapActions("chqadmin/url", ["add", "del", "upd"]),
    addUrl(e) {
      if (this.urlInput != "") {
        let obj = {
          url: this.urlInput
        };
        this.add(obj);
        this.urlInput = "";
      }
    },
    delItem(condition) {
      this.del(condition);
    }
  }
};
</script>
