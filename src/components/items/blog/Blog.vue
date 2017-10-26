<template>
  <div class="container">
    <div class="el-row margin-top-30">
      <div class="el-col-md-24 text-right">
        <router-link :to="'editor'" class="navigation-link">
          <el-button type="primary">Editor</el-button>
        </router-link>
      </div>
    </div>

    <pagination
      :pageSize="results.pageSize"
      :pageIndex="results.pageIndex"
      :totalCount="results.totalCount"
    >
    </pagination>

    <card-list
      :items="filterResults"
      :filter="filter"
    >

    </card-list>

  </div>
</template>

<script>
  import CardList from '@/components/common/mixin/list/CardList.vue'
  import Pagination from '@/components/common/mixin/list/Pagination'
  import {filterMixin} from '@/components/common/mixin/list/filterMixin.js'

  export default {
    mixins: [filterMixin],
    components: {
      CardList, Pagination
    },
    data () {
      return {
        watch: {
          pageIndex: (value) => {
            console.log('Blog', value)
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/scss/items/blog/blog";

</style>

