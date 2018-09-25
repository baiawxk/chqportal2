<template>
    <div>
        <h1>test page</h1>

        <router-link to="/">to main paged</router-link>
     <pockage></pockage>

     <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  This is a light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert—check it out!
</div>

    </div>
</template>


<script>
import Pockage from './PockagePage/Pockage'
export default {
        name: 'test-page',
  components: {Pockage}
}
</script>



<style>

  @import url('../assets/css/bootstrap.min.css');


</style>

