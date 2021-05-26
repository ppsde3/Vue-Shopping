import Vue from 'vue'
import Vuex from 'vuex'

import account from './account'
import product from './product'
import signin from './signin';
Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      account,
      product,
      signin

    },

    strict: process.env.DEV
  })

  return Store
}
