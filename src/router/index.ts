import { createRouter, createWebHistory } from 'vue-router';
import LoadingView from '../views/LoadingView.vue';
import Button from '../components/Button.vue';

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: LoadingView,
  },
  {
    path: '/title',
    name: 'Title',
    component: Button,
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