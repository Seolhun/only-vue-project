<template>
  <div class="main">
    <img src="../assets/img/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <button>select</button>

    <h1>Alert Section</h1>
    <b-alert show>
      Default Alert
    </b-alert>

    <h1>Button Section</h1>
    <div>
      <b-button>I am a Button</b-button>
      <b-button href="#">I am a Link</b-button>
    </div>

    <h1>Card Section</h1>
    <div>
      <b-card title="Card Title"
              img="https://lorempixel.com/600/300/food/5/"
              img-alt="Image"
              tag="article"
              style="width: 20rem;"
              class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'root',
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
