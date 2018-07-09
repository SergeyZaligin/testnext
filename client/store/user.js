import axios from 'axios'

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

class User {
  constructor(token) {
    this.token = token
  }
}

export default {

  state: {
    user: null
  },

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
        //console.log(user.data.token);
        localStorage.setItem('auth-token', user.data.token);
        let token = localStorage.getItem('auth-token');
        commit('setUser', token)

      } catch (error) {
        console.log(error.message);
        throw error
      }
    },
    autoLoginUser({
      commit
    }, payload) {

    },
    logoutUser({
      commit
    }) {

    }
  },

  getters: {
    user(state) {
      return state.user;
    }
  },

  plugins: [createPersistedState()]
}
