import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';
import Home from '../components/core/Home.vue';
import Login from '../components/core/Login.vue';
import Register from '../components/core/Register.vue';

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
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import("../components/core/BoardAdmin.vue")
  },
  {
    path: '/user',
    name: 'user',
    component: () => import("../components/core/BoardUser.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/product/Product_Add")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../components/cart/CheckOut.vue")
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import("../components/core/Profile.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
