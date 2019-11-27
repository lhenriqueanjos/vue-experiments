import axios from 'axios';

const store = {
  namespaced: 'true',
  state: {
    posts: null,
    isLoadingPosts: false,
  },
  mutations: {
    SET_IS_LOADING_POSTS: (state, payload) => {
      state.isLoadingPosts = payload;
    },
    SET_POSTS: (state, payload) => {
      state.posts = payload;
    },
  },
  actions: {
    GET_POSTS: async ({ commit }) => {
      commit('SET_IS_LOADING_POSTS', true);
      const { data } = await axios
        .get('https://jsonplaceholder.typicode.com/posts');

      commit('SET_POSTS', data);
      commit('SET_IS_LOADING_POSTS', false);
    },
  },
};

export default store;
