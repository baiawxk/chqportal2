<template>
  <d2-container>
    <template slot="header">Page 3 header</template>
    <div id="input">

      <b-field label="URL">
        <b-input value="pls input url,press enter to save"></b-input>
      </b-field>
      <b-field label="add tags">
        <b-taginput v-model="tags" type="is-dark">
        </b-taginput>
      </b-field>
    </div>
    <div id="display">

    </div>
    <template slot="footer">footer</template>
  </d2-container>
</template>

<script>
export default {
  name: 'page3',
  data: function () {
    return {}
  }
}
</script>