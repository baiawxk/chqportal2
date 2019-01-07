<template>
  <d2-container>
    <template slot="header">Page 3 header</template>

    <b-field>
      <b-input
        placeholder="Search..."
        type="search"
        icon="magnify"
        v-model="ip_search"
      >
      </b-input>
      <p class="control">
        <button class="button is-primary">Search</button>
      </p>
    </b-field>

    <el-card
      class="box-card"
      v-for="menu in searchResult"
      :key="menu.index"
    >
      <div
        slot="header"
        class="clearfix"
      >
        <span>{{menu.title || menu.url}}</span>
        <el-button
          @click="open(menu.url)"
          style="float: right; padding: 3px 0"
          type="text"
        >访问</el-button>
      </div>
      <div>{{menu.tags}}</div>
    </el-card>

    <template slot="footer">footer</template>
  </d2-container>
</template>

<script>
import shouquJSON from "@/menu/temp/shouqu.json";
import juejinJSON from "@/menu/temp/juejin.json";
import _ from "lodash";
import opn from "opn";

export default {
  name: "page17",
  data: function() {
    let menuData = [...shouquJSON, ...juejinJSON];
    console.log(menuData);
    return {
      ip_search: "",
      ip_tags: "",
      menuData
    };
  },
  computed: {
    searchResult: function() {
      let self = this;
      return this.menuData.find(function(menu) {
        const title = menu.title;
        const keyword = self.ip_search;
        let isFind = false;
        if (title != null && title.length > 0) {
          if (title.indexOf(keyword) != -1) isFind = true;
        }
        return isFind;
      });
    }
  },
  methods: {
    open: function(url) {
      opn(url);
    }
  }
};
</script>

