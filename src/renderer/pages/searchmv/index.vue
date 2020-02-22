<template>
  <d2-container>
    <div>
      <div>
        <el-input
          v-model="keywordInput"
          @keyup.native.enter="search"
        >
        </el-input>
      </div>
      <div>
        <chqMiRouter></chqMiRouter>
      </div>
      <div id="result">
        <div v-if="urlAry.length > 0">
          <div
            v-for="url in urlAry"
            :key="url"
          >
            <div class="urlItem">
              {{url}}
              <webview
                class="d2-container-frame"
                :src="url"
                frameborder="10"
                width="100%"
                height="100%"
              />
            </div>
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
  methods: {
    search() {
      this.kw = this.keywordInput;
    },
    dropHandle: function(items) {
      this.$store.dispatch("add", items);
    }
  }
};
</script>

<style>
.urlItem {
  border: 10px;
}
</style>