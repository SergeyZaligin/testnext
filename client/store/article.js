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
    articles: [],
    article: []
  },

  mutations: {
    createArticle (state, payload) {
      state.articles.push(payload)
    },
    loadArticles (state, { articles, page }) {
      state.articles = articles
    },
    loadArticle (state, { article }) {
      state.article = article
    }
  },

  actions: {
    async getArticles ({ commit }, payload) {

      const resultArticles = [];
      const page = payload || 1;
      console.log('PAGE==>>', page);
      try {
        const articles = await axios.get(`http://localhost:3001/api/articles/${page}`);
        commit('loadArticles', {articles: articles.data});
        console.log("resultArticles", articles.data);
      } catch (error) {
        console.log(error.message);
        throw error
      }
    },

    async getArticleById ({ commit }, payload) {

      const id = payload;
      console.log('ID ====>', id);

      try {
        const article = await axios.get(`http://localhost:3001/api/article/${id}`);
        commit('loadArticle', {article: article.data});
        console.log("resultArticle", article.data);
      } catch (error) {
        console.log(error.message);
        throw error
      }
    },

  },

  getters: {
    articles(state) {
      return state.articles;
    },
    article(state) {
      return state.article;
    }
  }

}
