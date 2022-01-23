import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/saved',
    name: 'Saved',
    component: () => import('../views/SavedView.vue'),
  },
  {
    path: '/superhero/:id',
    name: 'SuperHero',
    component: () => import('../views/SuperheroView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
