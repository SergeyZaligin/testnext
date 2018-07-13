import axios from 'axios'

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';


class Article {
  constructor (visible = 1, title, slug, preview, imageThubnail = '', text, id = null) {
    this.visible = visible
    this.title = title
    this.slug = slug
    this.preview = preview
    this.imageThubnail = imageThubnail
    this.text = text
    this.id = id
  }
}

export default {

  state: {
    articles: []
  },

  mutations: {
    createArticle (state, payload) {
      state.articles.push(payload)
    },
    loadArticles (state, payload) {
      state.articles = payload
    }
  },

  actions: {
    async getArticles ({ commit }) {

      const resultArticles = [];

      try {
        const articles = await axios.get(`http://localhost:3001/api/articles/2`);

       articles.data.articles.forEach(el => {

          resultArticles.push(new Article(
            el.title,
            el.slug,
            el.preview,
            el.imageThubnail,
            el.text
          ))
        });
        commit('loadArticles', resultArticles);
        console.log("ARTICLE", articles);
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
