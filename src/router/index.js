import Vue from 'vue'
import Router from 'vue-router'

import Root from '@/components/Root'
import Notice from '@/components/items/notice/Notice'
import Study from '@/components/items/study/Study'
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
      path: '/study',
      name: 'Study',
      component: Study
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
  ]
})
