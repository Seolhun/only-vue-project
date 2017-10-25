<template>
  <div class="container">
    <div class="el-row margin-top-30">
      <div class="el-col-md-24 text-right">
        <router-link :to="'editor'" class="navigation-link">
          <el-button type="primary">Editor</el-button>
        </router-link>
      </div>
    </div>

    <blog-table>

    </blog-table>
  </div>
</template>

<script>
  import BlogTable from './BlogTable.vue'

  export default {
    components: {
      BlogTable
    },
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

