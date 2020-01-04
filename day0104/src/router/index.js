/* eslint-disable indent */
import Vue from 'vue'
import One from '@/components/One'
import Two from '@/components/Two'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: One
        },
        {
            path: '/one',
            component: One
        },
        {
            path: '/two',
            component: Two
        }
    ]
})

export default router
