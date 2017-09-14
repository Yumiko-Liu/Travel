import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Guide from '@/page/guide'
import GuideList from '@/page/guide-list'
import Detail from '@/page/detail'
import Destination from '@/page/destination'

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
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    }
  ]
})
