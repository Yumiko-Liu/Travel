import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import PopularGuide from '@/page/popular-guide'
import LocGuide from '@/page/loc-guide'
import GuideNotes from '@/page/guide-notes'
import Destination from '@/page/destination'
import TravelNotes from '@/page/travel-notes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/popular-guide',
      name: 'popular-guide',
      component: PopularGuide
    },
    {
      path: '/loc-guide',
      name: 'loc-guide',
      component: LocGuide
    },
    {
      path: '/guide-notes',
      name: 'guide-notes',
      component: GuideNotes
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    },
    {
      path: '/travel-notes',
      name: 'travel-notes',
      component: TravelNotes
    }
  ]
})
