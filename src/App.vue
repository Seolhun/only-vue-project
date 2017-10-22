<template>
  <div id="app">
    <header-menu>

    </header-menu>
    <bread-crumb>

    </bread-crumb>

    <div class="margin-top-30 margin-bottom-30">
      <router-view></router-view>
    </div>

    <footer-menu>

    </footer-menu>
  </div>
</template>

<script>
  import HeaderMenu from './components/layout/Header.vue'
  import FooterMenu from './components/layout/Footer.vue'
  import BreadCrumb from './components/layout/BreadCrumb.vue'

  export default {
    components: {HeaderMenu, FooterMenu, BreadCrumb},
    name: 'app'
  }
</script>

<style lang="sass">
  @import "assets/scss/app"

</style>
