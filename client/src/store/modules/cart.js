// import Axios from "axios";

import Axios from "axios";

const state = {
  carts: [],
  history: [],
};
const mutations = {
  setCarts: (state, carts) => (state.carts = carts),
  setHistory: (state, history) => (state.history = history),
};
const actions = {
  AddToCart: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      Axios({
        url: `http://localhost:3000/cart/${payload.user_id}`,
        method: "post",
        data: {
          product_id: payload.product_id,
        },
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  EditQuantity: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      Axios({
        url: `http://localhost:3000/cart/edit/${payload.id}`,
        method: "put",
        data: {
          newQuantity: payload.quantity,
        },
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((data) => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  FetchCarts: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      Axios({
        url: `http://localhost:3000/cart/${payload}`,
        method: "get",
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          commit("setCarts", data);
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  Checkout: ({ commit }) => {
    return new Promise((resolve, reject) => {
      Axios({
        url: "http://localhost:3000/cart/checkout",
        method: "put",
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((data) => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  History: ({ commit }) => {
    return new Promise((resolve, reject) => {
      Axios({
        url: "http://localhost:3000/cart/transaction/history",
        method: "get",
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          commit("setHistory", data);
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  DeleteCart: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      Axios({
        url: `http://localhost:3000/cart/${payload}`,
        method: "delete",
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((data) => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
const getters = {
  allCarts: (state) => state.carts,
  history: (state) => state.history,
};

export default {
  state,
  mutations,
  actions,
  getters,
};