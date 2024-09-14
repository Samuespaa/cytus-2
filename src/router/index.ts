import { createRouter, createWebHistory } from 'vue-router';
import LoadingView from '@/views/LoadingView.vue';

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: LoadingView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: LoadingView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;