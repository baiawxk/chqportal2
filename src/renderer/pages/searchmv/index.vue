<template>
  <d2-container type="card">
    <div>
      <div style="margin:0 10px 0 10px">
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
        <el-card
          class="box-card"
          v-if="urlAry.length> 0"
        >
          <el-carousel
            :autoplay="false"
            height="370px"
          >
            <el-carousel-item
              v-for="url in urlAry"
              :key="url"
            >
              <webview
                allowpopups
                v-on:new-window="selfOpen"
                class="d2-container-frame"
                :src="url"
                style="height:100%;width:100%;"
              />
            </el-carousel-item>
          </el-carousel>
        </el-card>
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
            `http://yyetss.com/Search/index/?s_keys=${this.kw}`,
            `http://s.ygdy8.com/plus/s0.php?typeid=1&keyword=${this.gbkKW}`,
            `http://cili.q5p.cc/plus/s/index.asp?keyword=${this.gbkKW}`
          ];
    },
    gbkKW() {
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
  margin: 10px;
}
.frame_list_item {
  margin: 20px;
}
.frame_item_block {
  margin: 20px;
}
</style>