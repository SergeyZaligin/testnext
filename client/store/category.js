import axios from 'axios'

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';


class Article {
  constructor (title, slug, preview, imageThubnail = '', text) {

    this.title = title
    this.slug = slug
    this.preview = preview
    this.imageThubnail = imageThubnail
    this.text = text
  }
}

export default {

  state: {
    categories: []
  },

  mutations: {
    createCategory (state, payload) {
      state.categories.push(payload)
    },
    loadCategories (state, { categories }) {
      state.categories = categories
    }
  },

  actions: {

    async createAd ({commit, getters}, payload) {

    },


    async getCategories ({ commit }, payload) {
      const resultCategories = [];
      try {
        const categories = await axios.get(`http://localhost:3001/api/categories/`);
        commit('loadCategories', {categories: categories.data});
        console.log("resultCategories", categories.data);
      } catch (error) {
        console.log(error.message);
        throw error
      }
    }

  },

  getters: {
    categories(state) {
      return state.categories;
    }
  }

}
