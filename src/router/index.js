import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Guide from '@/page/guide'
import GuideList from '@/page/guide-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    {
      path: '/guide-list',
      name: 'guide-list',
      component: GuideList
    }
  ]
})
