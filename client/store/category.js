import axios from 'axios'
import localStorage from '../plugins/localStorage';
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

    async addCategory ({commit, getters}, payload) {
      const category = await axios.post(`http://localhost:3001/api/category/create`, payload, {
        headers: { Authorization: payload.token }
      });
      console.log(category);
      commit('createCategory', payload);
    },
    async getCategories ({ commit }, payload) {

      const resultCategories = [];

      try {
        const categories = await axios.get(`http://localhost:3001/api/category`, {
          headers: { Authorization: payload }
      });

        commit('loadCategories', {categories: categories.data});
        console.log("resultCategories", categories.data);

      } catch (error) {
        console.log(error.message);
        throw error
      }
    },
    async removeCategory ({ commit }, { token, id }) {
      const categories = await axios.delete(`http://localhost:3001/api/category/${id}`, {
          headers: { Authorization: token }
      });
      commit('loadCategories', {categories: categories.data});
      console.log("resultCategories", categories.data);
    },

    async updateCategory ({ commit }, payload) {

      const resultCategories = [];

      try {
        const categories = await axios.put(`http://localhost:3001/api/category/${payload.id}`, payload, {
          headers: { Authorization: payload.token }
      });

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

