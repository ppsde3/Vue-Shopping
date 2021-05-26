import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/account/SignUp.vue'
import AddProduct from '../components/products/AddProduct.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Base.vue'),
    children: [ 
      { path: '', component: () => import('../views/home/Products.vue') },
      { path: 'details/:idProduct', component: () => import('../views/home/Details.vue') },
      { path: 'cart', component: () => import('../views/home/Cart.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/account/Login.vue')
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/add',
    component: AddProduct,
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
