import { createRouter, createWebHistory } from 'vue-router';
import LoadingView from '../views/LoadingView.vue';
import TitleView from '../views/TitleView.vue';

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: LoadingView,
  },
  {
    path: '/title',
    name: 'Title',
    component: TitleView,
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