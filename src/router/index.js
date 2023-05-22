import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: () => import('@/views/loginPage.vue')
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    meta: { requiresAuth: true },
    component: () => import('@/views/mainPage.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('token');

  if (requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router
