import axios from 'axios'

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

class User {
  constructor(token) {
    this.token = token
  }
}


export const state = () => ({
  user: null
})

export default {



  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },

  actions: {
    async registerUser({
      commit
    }, {
      email,
      password
    }) {
      try {

      } catch (error) {

      }
    },
    async loginUser({
      commit
    }, {
      email,
      password
    }) {
      try {
        const user = await axios.post(`http://localhost:3001/api/auth/login`, {
          email,
          password
        })
        console.log(user);
        commit('setUser', user.data.token);

      } catch (error) {
        console.log(error.message);
        throw error
      }
    },

    async registration ({ commit }, { email, password }) {
      try {
        const user = await axios.post(`http://localhost:3001/api/auth/register`, {
          email,
          password
        });
        console.log(user);
        commit('setUser', user.data.token);
      } catch (error) {
        console.log(error.message);
        throw error
      }
    },

    logout ({commit}) {
      document.cookie = 'auth_token' + '=; Max-Age=0';
      commit('setUser', null);
    }

  },

  getters: {
    user(state) {
      return state.user;
    }
  },


}
