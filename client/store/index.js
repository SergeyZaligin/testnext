import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import article from './article';
import category from './category';
import district from './district';
import agency from './agency';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: {
      user,
      article,
      category,
      district,
      agency
    }
  });

export default store;
