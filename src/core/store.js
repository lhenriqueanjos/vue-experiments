import Vue from 'vue';
import Vuex from 'vuex';

import * as experimentsModule from '@/experiments';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...experimentsModule.stateManagement.store.state,
  },
  getters: {
    ...experimentsModule.stateManagement.store.getters,
  },
  mutations: {
    ...experimentsModule.stateManagement.store.mutations,
  },
  actions: {
    ...experimentsModule.stateManagement.store.actions,
  },
});
