<template>
  <!-- built files will be auto injected -->
  <div id="app">
    <header-menu>

    </header-menu>
    <router-view>

    </router-view>
  </div>
</template>

<script>
  import HeaderMenu from './components/layout/Header.vue'

  export default {
    components: {HeaderMenu},
    name: 'app'
  }
</script>

<style lang="sass">
  @import "assets/scss/app"

</style>
