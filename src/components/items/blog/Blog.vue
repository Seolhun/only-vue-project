<template>
  <div>
    <div class="container">
      <el-row class="margin-bottom-30 margin-top-30">
        <bread-crumb></bread-crumb>
      </el-row>

      <el-row class="margin-bottom-30 margin-top-30">
        <el-col :sm="24">
          <el-button type="primary" icon="edit">Search</el-button>
        </el-col>
      </el-row>


      <blog-table>

      </blog-table>
    </div>
  </div>
</template>

<script>
  import BlogTable from './BlogTable.vue'
  import BreadCrumb from 'components/layout/BreadCrumb.vue'

  export default {
    components: {BlogTable, BreadCrumb},
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

