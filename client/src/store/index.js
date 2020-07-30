import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import category from "./modules/category";
import user from "./modules/user";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    category,
    user,
    cart,
  },
});
