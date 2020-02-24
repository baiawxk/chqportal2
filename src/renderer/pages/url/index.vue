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
      <div
        v-for="item in list"
        :key="item"
      >
        {{item.url}}
      </div>

    </div>
  </d2-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      urlInput: "",
      labels: [],
      table: []
    };
  },
  computed: {
    ...mapGetters("chqadmin/url", ["list"])
  },
  methods: {
    ...mapGetters("chqadmin/url", ["find", "has"]),
    ...mapActions("chqadmin/url", ["add", "del", "upd"]),
    addUrl(e) {
      window.abc = this;
      if (this.urlInput != "") {
        let obj = {
          url: this.urlInput
        };
        this.add(obj);
        this.urlInput = "";
      }
    }
  }
};
</script>
