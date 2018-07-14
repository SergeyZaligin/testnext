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
    articles: []
  },

  mutations: {
    createArticle (state, payload) {
      state.articles.push(payload)
    },
    loadArticles (state, { articles, page }) {
      state.articles = articles
    }
  },

  actions: {
    async getArticles ({ commit }, payload) {

      const resultArticles = [];
      const page = payload || 1;
      console.log('PAGE==>>', page);
      try {
        const articles = await axios.get(`http://localhost:3001/api/articles/${page}`);

      //  articles.data.forEach(el => {

      //     resultArticles.push(new Article(
      //       el.title,
      //       el.slug,
      //       el.preview,
      //       el.imageThubnail,
      //       el.text
      //     ))
      //   });
        commit('loadArticles', {articles: articles.data});
        console.log("resultArticles", articles.data);
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
  }

}
