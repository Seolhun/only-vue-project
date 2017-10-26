<template>
  <div>
    <div class="el-row margin-top-30">
      <div class="el-col-sm-24 btn-group">
        <input
          class="el-input margin-right-10"
          v-model.lazy.prevent="filter.text"/>
        <button class="el-button el-button--primary">Search</button>
      </div>
    </div>

    <div class="el-row margin-top-30">
      <el-col
        :xs="24" :sm="24" :md="12" :lg="12"
        v-for="item in items"
        :key="item.id"
      >
          <el-card
            v-if="item.isActive"
            class="card-group padding-10 margin-20 max-height-700"
            :body-style="{ padding: '0px' }">
            <div class="text-center">
              <img src="~assets/img/logo2.png" class="card-img">
            </div>

            <div class="padding-20">
            <span class="blog-title">
              {{ item.title }}
            </span>
              <div class="bottom clearfix">
                <div class="blog-created-by">
                  Created By
                  <a :href="'https://github.com/' + item.createdBy" target="_blank">
                    {{ item.createdBy }}
                  </a>
                  at
                  <time class="time">{{ item.createdDate }}</time>
                </div>
              </div>
            </div>
          </el-card>
      </el-col>
    </div>
    <div class="el-row margin-top-30">

    </div>
  </div>
</template>

<script>
  export default {
    props: ['items', 'filter'],
    data () {
      return {
      }
    },
    methods: {
      transitionHover () {
        this.active = !this.active
      }
    },
    computed: {},
    watch: {
      pageIndex: (value) => {
        console.log('CardList', value)
      }
    }
  }
</script>

<style lang="scss">
</style>
