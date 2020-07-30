import Axios from "axios";

const state = {};
const mutations = {};
const actions = {
  Login: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      Axios({
        url: "http://localhost:3000/users/login",
        method: "post",
        data: payload,
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("name", data.name);
          localStorage.setItem("id", data.id);
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  Register: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      Axios({
        url: "http://localhost:3000/users/register",
        method: "post",
        data: payload,
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
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
