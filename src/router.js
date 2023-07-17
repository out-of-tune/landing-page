import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import(/* webpackChunkName: "about" */ './views/Project.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "about" */ './views/News.vue')
    }
  ]
})

export default router
