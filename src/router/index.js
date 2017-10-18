import Vue from 'vue'
import Router from 'vue-router'

import Root from '@/components/Root'
import Notice from '@/components/items/notice/Notice'
import Blog from '@/components/items/blog/Blog'
import Contact from '@/components/items/contact/Contact'
import Supporter from '@/components/items/supporter/Supporter'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
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
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/supporter',
      name: 'Supporter',
      component: Supporter
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
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
