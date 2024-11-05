import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/games',
      name: 'game',
      component: () => import('@/views/GameView.vue'),
      meta: {
        title: 'Game'
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/views/FavoriteView.vue'),
      meta: {
        title: 'Favorite'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
