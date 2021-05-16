import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';

const routes = [
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/product/Product_Add")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../components/cart/CheckOut")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router