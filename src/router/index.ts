import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: '首佳文创 | 让文化，拥有可以被带走的形状' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: '关于首佳 | 首佳文创' },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: { title: '定制服务 | 首佳文创' },
    },
    {
      path: '/services/:slug',
      name: 'service-detail',
      component: () => import('../views/ServiceDetailView.vue'),
      props: true,
      meta: { title: '服务详情 | 首佳文创' },
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/WorksView.vue'),
      meta: { title: '案例展示 | 首佳文创' },
    },
    {
      path: '/works/:slug',
      name: 'work-detail',
      component: () => import('../views/WorkDetailView.vue'),
      props: true,
      meta: { title: '案例详情 | 首佳文创' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: '联系我们 | 首佳文创' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: '页面未找到 | 首佳文创' },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = String(to.meta.title ?? '首佳文创')
})

export default router
