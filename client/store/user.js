import axios from 'axios'

class User {
  constructor (token) {
    this.token = token
  }
}

export default {
  state: {
    user: null
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },

  actions: {
    async registerUser ({ commit }, { email, password }) {
      try {

      } catch(error) {

      }
    },
     async loginUser ({ commit }, { email, password }) {
      try {
        const user = await axios.post(`http://localhost:3001/api/auth/login`, { email, password })
        console.log(user.data.token);
        commit('setUser', user.data.token)

      } catch (error) {
        console.log(error.message);
        throw error
      }
    },
    autoLoginUser ({ commit }, payload) {

    },
    logoutUser ({ commit }) {

    }
  },

  getters: {
    user (state) {
      return state.user
    }
  }
}
