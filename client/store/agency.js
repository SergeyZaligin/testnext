import axios from 'axios'

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

export default {

  state: {
    agencysForDistrict: []
  },

  mutations: {
    loadAgencys (state, { agencys, id }) {
      state.agencys = agencys;
    }
  },

  actions: {
    async getAllAgencysByDistrictId ({ commit }, payload) {

      const id = payload;
      console.log('slug agencys ====>', id);
      console.log('payload agencys ====>', payload);
      try {
        const agencys = await axios.get(`http://localhost:3001/api/agency/district/${id}`);
        commit('loadAgencys', {agencys: agencys.data});
        console.log("resultAgencys", agencys.data);
      } catch (error) {
        console.log(error.message);
        throw error
      }
    }
  },

  getters: {
    agencysForDistrict (state) {
      return state.agencysForDistrict;
    }
  }

}
