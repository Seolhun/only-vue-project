<template>
  <div>
    <el-row class="margin-bottom-30 margin-top-30">
      <el-col :sm="24">
        <el-button type="primary" icon="edit">Search</el-button>
      </el-col>
    </el-row>


    <blog-table>

    </blog-table>
  </div>
</template>

<script>
  import ItemList from './ItemList.vue'

  export default {
    components: {ItemList},
    data () {
      return {
        watch: {}
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/scss/items/blog/blog";

</style>

