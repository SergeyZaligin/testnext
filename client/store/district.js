import axios from 'axios'
import localStorage from '../plugins/localStorage';
import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

export default {

  state: {
    districts: []
  },

  mutations: {
    createCategory (state, payload) {
      state.districts.push(payload)
    },
    loadDistricts (state, { districts }) {
      state.districts = districts
    }
  },

  actions: {

    async addDistrict ({commit, getters}, payload) {
      const category = await axios.post(`http://localhost:3001/api/category/create`, payload, {
        headers: { Authorization: payload.token }
      });
      console.log(category);
      commit('createCategory', payload);
    },
    async getDistricts ({ commit }, payload) {

      const resultDistricts = [];

      try {
        const districts = await axios.get(`http://localhost:3001/api/district`);

        commit('loadDistricts', {districts: districts.data});
        console.log("resultDistricts", districts.data);

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
    districts(state) {
      return state.districts;
    }
  }

}

