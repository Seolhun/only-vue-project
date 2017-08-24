<template>
  <div class="main">
    <div class="height-300 gradient-fc padding-30">
      <h1>{{ msg }}</h1>
    </div>

    <div class="padding-30">
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to SeolHun Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

</style>
