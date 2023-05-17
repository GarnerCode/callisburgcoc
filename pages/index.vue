<template>
  <div id="home-page">
    <Landing></Landing>
    <Sermon></Sermon>
  </div>
</template>

<style lang="scss">
  @media screen and (min-width: 0px) {
    #home-page {
      display: flex;
      flex-direction: column;
      gap: 10rem;
    }
  }
  @media screen and (min-width: 768px) {
    #home-page {
      gap: 20rem;
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
