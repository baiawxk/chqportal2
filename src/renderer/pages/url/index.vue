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
        :data="list"
        row-key="id"
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="UUID"
          width="240"
        >
        </el-table-column>
        <el-table-column
          prop="url"
          label="URL"
          width="240"
        >
        </el-table-column>
        <el-table-column
          prop="ts"
          label="TIME"
          width="180"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="240"
        >
          <template slot-scope="props">
            <el-button
              type="primary"
              @click="delItem(props.row)"
            >Upd</el-button>
            <el-button
              type="primary"
              @click="delItem({id:props.row.id})"
            >Del</el-button>
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
