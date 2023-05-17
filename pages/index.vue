<template>
  <div id="home-page">
    <Landing></Landing>
    <Sermon></Sermon>
    <About></About>
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
import AOS from 'aos'
import 'aos/dist/aos.css'

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
    AOS.init();
  }
})
</script>
