import DummyBlogs from '@/assets/dummy/blog.json'

export const filterMixin = {
  props: ['getUrl', 'localIndex'],
  data () {
    return {
      // items is Array
      results: {
        items: DummyBlogs,
        pageIndex: 1,
        pageSize: 10,
        totalCount: 1200
      },
      filter: {
        type: 1,
        text: '',
        sortBy: 'desc'
      },
      types: []
    }
  },
  computed: {
    filterResults () {
      // To Search Logic
      if (this.filter.text.trim() !== '') {
        let bool, bool2, bool3, localIndex
        var startNum, lastNum
        startNum = (this.results.pageIndex <= 1 ? 1 : this.results.pageIndex * this.results.pageSize)
        lastNum = (this.results.pageIndex * this.results.pageSize >= this.results.totalCount ? this.results.totalCount : this.results.pageIndex * this.results.pageSize)
        console.log(startNum)
        console.log(lastNum)
        return this.results.items.filter((item, index) => {
          localIndex = (index + 1)
          bool = this.removespace(item.title.toLowerCase()).indexOf(this.removespace(this.filter.text.toLowerCase())) > -1
          bool2 = this.removespace(item.content.toLowerCase()).indexOf(this.removespace(this.filter.text.toLowerCase())) > -1
          bool3 = this.removespace(item.createdBy.toLowerCase()).indexOf(this.removespace(this.filter.text.toLowerCase())) > -1
          if (bool || bool2 || bool3) {
            if (startNum < localIndex && lastNum >= localIndex) {
              console.log(localIndex)
              return item
            }
          }
        })
      }
      // To Not Search Logic
      return this.results.items
    }
  },
  methods: {
    removespace (value) {
      return value.replace(/\s/g, '')
    },
    created () {
      console.log('Created mixin in filterMixin.js')
    }
  }
  // mounted(){
  //   axios.get("/fa")
  //     .then(response  => this.items = response.data);
  // }
}
