import axios from 'axios'

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
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
      } catch(error) {
        console.log(error.message);
        throw error
      }
    },
     async loginUser ({ commit }, { email, password }) {
      try {
        const user = await axios.post(`http://localhost:3001/api/auth/login`, { email, password })
        console.log(user);
        // commit('setUser', new User(user.uid))

      } catch (error) {
        console.log(error.message);
        throw error
      }
    },
    autoLoginUser ({ commit }, payload) {
      commit('setUser', new User(payload.uid))
    },
    logoutUser ({ commit }) {
      fb.auth().signOut()
      commit('setUser', null)
    }
  },

  getters: {
    user (state) {
      return state.user
    }
  }
}
