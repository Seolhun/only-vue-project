<template>
  <div>
    <div class="el-row margin-top-30">
      <el-col
        :xs="24" :sm="12" :md="8" :lg="6"
        v-for="(blog, index) in blogs"
        :key="blog.id"
      >
        <el-card
          class="margin-left-20 margin-bottom-20"
          :body-style="{ padding: '0px' }">
          <img src="https://lorempixel.com/600/300/food/5/" class="image">
          <div class="padding-20">
          <span class="blog-title">
            {{ blog.title }}
          </span>
            <div class="bottom clearfix">
              <div class="blog-created-by">
                Created By
                <a :href="'https://github.com/' + blog.createdBy" target="_blank">
                  {{ blog.createdBy }}
                </a>
                at
                <time class="time">{{ blog.createdDate }}</time>
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
    data () {
      return {
        blogs: [{
          id: '1',
          idx: '1',
          blogType: '',
          fileDataList: [],
          commentList: [],
          title: 'Blog Example title 1',
          content: 'Blog Example Content 1',
          hits: '100',
          recommend: '15',
          depth: '',
          createdDate: new Date().toLocaleTimeString(),
          createdBy: 'SeolHun',
          updatedBy: '',
          updatedDate: '',
          isActive: true
        }, {
          id: '2',
          idx: '2',
          blogType: '',
          fileDataList: [],
          commentList: [],
          title: 'Blog Example title 2',
          content: 'Blog Example Content 2',
          hits: '200',
          recommend: '15',
          depth: '',
          createdDate: new Date().toLocaleTimeString(),
          createdBy: 'SeolHun',
          updatedBy: '',
          updatedDate: '',
          isActive: true
        }],
        pageIndex: '',
        pageSize: ''
      }
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>

<style lang="scss">

</style>
