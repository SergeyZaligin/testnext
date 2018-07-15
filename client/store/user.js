import axios from 'axios'

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

class User {
  constructor(token, role) {
    this.token = token;
    this.role = role;
  }
}

export default {

  state: {
    user: null,
    role: '',
    id: ''
  },

  mutations: {
    setUser(state, payload) {
      state.role = payload.id;
      state.user = payload.token;
      state.role = payload.role;
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
        commit('setUser', {
            token: user.data.token,
            role: user.data.role,
            id: user.id
        });

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
        commit('setUser', {
          token: user.data.token,
          role: user.data.role,
          id: user.id
      });
      } catch (error) {
        console.log(error.message);
        throw error
      }
    },

    logout ({commit}) {
      document.cookie = 'auth_token' + '=; Max-Age=0';
      commit('setUser', { token: null, role: '' });
    }

  },

  getters: {
    user(state) {
      return state.user;
    }
  },


}
