import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const title = 'Vue-Signature-Simple'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/index.vue')
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('@/pages/document.vue')
      },
      {
        path: 'donate',
        name: 'donate',
        component: () => import('@/pages/donate.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    redirect: '/'
  }
]
console.log(routes)
const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title
  next()
})

export default router
