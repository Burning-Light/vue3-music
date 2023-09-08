import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/discovery',
    name: 'discovery',
    component: () => import('../views/discovery/index.vue'),
    children: [
      {
        path: '',
        name: 'page1',
        component: () => import('../views/discovery/page1.vue')
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import('../views/discovery/page2.vue')
      },
      {
        path: 'page3',
        name: 'page3',
        component: () => import('../views/discovery/page3.vue')
      },
      {
        path: 'page4',
        name: 'page4',
        component: () => import('../views/discovery/page4.vue')
      },
      {
        path: 'page5',
        name: 'page5',
        component: () => import('../views/discovery/page5.vue')
      },
      {
        path: 'page6',
        name: 'page6',
        component: () => import('../views/discovery/page6.vue')
      }
    ]
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog/index.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/video/index.vue')
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('../views/follow/index.vue')
  },
  {
    path: '/roam',
    name: 'roam',
    component: () => import('../views/roam/index.vue')
  },
  // {
  //   path: '/play',
  //   name: 'play',
  //   component: () => import('../views/play/index.vue')
  // },
  {
    path: '/playlist',
    name: 'playlist',
    component: () => import('../views/playlist/index.vue'),
    children: [
      {
        path: '',
        name: 'songlist',
        component: () => import('../views/playlist/songlist.vue')
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('../views/playlist/comment.vue')
      },
      {
        path: 'collectors',
        name: 'collectors',
        component: () => import('../views/playlist/collectors.vue')
      }]
  },
  {
    path: '/',
    redirect: '/discovery'
  },
  // {
  //   path: '*',
  //   redirect: '/notFound'
  // },
]

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(process.env.BASE_URL),
  routes
})

export default router
