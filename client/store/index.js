import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import article from './article';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: {
      user,
      article
    }
  });

export default store;
