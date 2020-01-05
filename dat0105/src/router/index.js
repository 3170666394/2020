import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/index'
import classify from '@/views/classify'
import shopping from '@/views/shopping'
import mine from '@/views/mine'

import phone from '@/views/list/phone'
import peijian from '@/views/list/peijian'
import shoe from '@/views/list/shoe'
import huxi from '@/views/list/huxi'
import health from '@/views/list/health'
import eletic from '@/views/list/eletic'
import compute from '@/views/list/compute'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/classify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: classify,
    children: [
      {
        path: '',
        name: 'phone',
        component: phone
      },
      {
        path: 'peijian',
        name: 'peijian',
        component: peijian
      },
      {
        path: 'shoe',
        name: 'shoe',
        component: shoe

      },
      {
        path: 'huxi',
        name: 'huxi',
        component: huxi
      },
      {
        path: 'health',
        name: 'health',
        component: health
      },
      {
        path: 'eletic',
        name: 'eletic',
        component: eletic
      },
      {
        path: 'compute',
        name: 'compute',
        component: compute
      }
    ]

  },
  {
    path: '/shopping',
    name: 'shopping',
    component: shopping
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
