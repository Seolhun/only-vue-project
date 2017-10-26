<template>
  <div class="el-row margin-top-30 text-center">
    <div class="el-col-xs-24 btn-group">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :current-page.sync="pageIndex"
          :total="totalCount"
          :page-size="pageSize"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: ['pageIndex', 'pageSize', 'totalCount'],
    data () {
      return {
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`${val} items per page`)
      },
      handleCurrentChange (val) {
        console.log(`current page: ${val}`)
      }
    },
    watch: {
      pageIndex: (value) => {
        console.log('Pagination', value)
      }
    }
  }
</script>

<style lang="scss">

</style>
