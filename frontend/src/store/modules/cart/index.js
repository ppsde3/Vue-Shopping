import axios from 'axios';

const state={
    cartItems:[]
};

const mutations={
    UPDATE_CART_ITEMS(state,payload){
        state.cartItems=payload;
    },
    DELETE_CART_ITEMS(state){
      state.cartItems=[];
    },
    ADD_CART_ITEMS(state,payload){
      state.cartItems.push(payload);
    },
};

const actions = {
    getCartItems ({ commit }) {
      axios.get('/api/cart').then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    doCheckOut ({ commit }, cartItem) {
      console.log(cartItem);
      axios.post('/api/addCart', cartItem).then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    addCartItem ({ commit }, cartItem) {
      console.log(cartItem);
      axios.post('/api/addCart', cartItem).then((response) => {
        commit('ADD_CART_ITEMS', cartItem);});
    },
    removeCartItem ({ commit }, cartItem) {
      axios.delete('/api/cart/delete', cartItem).then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    removeAllCartItems ({ commit }) {
      axios.delete('/api/cart/delete/all').then((response) => {
        commit('DELETE_CART_ITEMS', response.data)
      });
    }
  }

const getters={
    cartItems: state => state.cartItems,
    cartTotal : state=>{
        return state.cartItems.reduce((acc,cartItem)=>{
            return (cartItem.quantity * cartItem.price)+acc;
        },0).toFixed(2);
    },
    cartQuantity: state =>{
        return state.cartItems.reduce((acc,cartItem)=>{
            return cartItem.quantity +acc;
        },0);
    }
};

const cartModule={
    state,
    mutations,
    actions,
    getters
}

export default cartModule;