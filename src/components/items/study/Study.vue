<template>
  <div class="container">
    <div class="row">
      <div class="text-center my-3">
        <b-btn v-b-tooltip.hover.auto title="I'm a tooltip!">Hover Me</b-btn>
      </div>

      <div
        class="col-sm-4 margin-top-20"
        v-for="study in studies"
      >
        <b-card
          class="margin-20"
          title="Card Title"
          img-src="https://lorempixel.com/600/300/food/5/"
          img-alt="Image"
          img-top
          tag="article"
        >
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        {{ study.text }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        studies: ['text', 'key']
      }
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>

<style lang="scss">

</style>

