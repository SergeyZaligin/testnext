import axios from 'axios'

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

export default {

  state: {
    articles: []
  },

  mutations: {
    setArticles(state, payload) {
      console.log(payload);
      state.articles.push(payload);
    }
  },

  actions: {
    async getArticles ({ commit }) {
      try {
        const articles = await axios.get(`http://localhost:3001/api/articles/2`);
        commit('setArticles', articles);
        console.log(articles);
      } catch (error) {
        console.log(error.message);
        throw error
      }
    },
  },

  getters: {
    articles(state) {
      return state.articles;
    }
  },


}
