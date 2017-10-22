<template>
  <div class="container">
    <el-row>
      <el-col
        :xs="12" :sm="8" :md="8" :lg="6"
        v-for="(o, index) in 6"
        :key="o"
      >
        <el-card
          class="margin-right-10 margin-bottom-20"
          :body-style="{ padding: '0px' }">
          <img src="https://lorempixel.com/600/300/food/5/" class="image">
          <div class="padding-20">
            <span>Yummy hamburger</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Operating button</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

</style>
