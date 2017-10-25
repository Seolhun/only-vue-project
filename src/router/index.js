import Vue from 'vue'
import Router from 'vue-router'

import Root from '@/components/Root'
import Notice from '@/components/items/notice/Notice'
import Blog from '@/components/items/blog/Blog'
import Supporter from '@/components/items/supporter/Supporter'
import MarkdownEditor from '@/components/common/editor/MarkdownEditor.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Root
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/aboutme',
      name: 'About Me',
      component: Blog
    },
    {
      path: '/supporters',
      name: 'Supporters',
      component: Supporter
    },
    {
      path: '/editor',
      name: 'Markdown',
      component: MarkdownEditor
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    document.title = 'Hi-Cord : ' + to.name
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {x: 0, y: 700}
  }
})
