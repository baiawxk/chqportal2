<template>
  <d2-container type="ghost">
    <div style="height:600px;overflow:hidden;padding:10px;">
      <div>
        <el-input
          v-model="keywordInput"
          @keyup.native.enter="search"
        >
        </el-input>
      </div>
      <div style="margin:10px;">
        <chqMiRouter></chqMiRouter>
      </div>
      <div
        id="result"
        class="frame_container"
      >
        <div v-if="urlAry.length > 0">
          <div
            v-for="url in urlAry"
            :key="url"
            class="frame_list_item"
          >
            <el-card
              class="box-card"
              :body-style="{ height: '300px',margin:'20px'}"
            >
              <webview
                allowpopups
                v-on:new-window="selfOpen"
                class="d2-container-frame"
                :src="url"
                style="height:100%;width:100%;"
              />
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </d2-container>
</template>

<script>
import chqMiRouter from "@/pages/dashboard/plugins/chqMiRouter";

export default {
  name: "searchmv",
  components: { chqMiRouter },
  data: function() {
    const self = this;
    return {
      keywordInput: "",
      kw: ""
    };
  },
  computed: {
    urlAry() {
      return this.kw === ""
        ? []
        : [
            `http://v.yizhansou.com/mv/search?kw=${this.kw}`,
            `http://cili.q5p.cc/plus/s/index.asp?keyword=${this.gb2312kw}`
          ];
    },
    gb2312kw() {
      return this.encodeURIgbk(this.kw);
    }
  },
  mounted() {},
  methods: {
    search() {
      this.kw = this.keywordInput;
    },
    selfOpen(e) {
      e.target.src = e.url;
    }
  }
};
</script>

<style>
.frame_container {
  padding: 0 0 300px 0;
  overflow: scroll;
  height: 100%;
}
.frame_list_item {
  margin: 20px;
}
.frame_item_block {
  margin: 20px;
}
</style>