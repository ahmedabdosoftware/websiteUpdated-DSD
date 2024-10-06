import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDatials from '../views/ProductDatials.vue'
import store from '../store/index.js'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ProductDatials/:ProductId',
    name: 'ProductDatials',
    component: ProductDatials,
  },
 
 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.hideHeader) {
    store.dispatch('updateShowHeader', false);
  } else {
    store.dispatch('updateShowHeader', true);
  }
  next();
});

export default router
