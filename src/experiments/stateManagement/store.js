import axios from 'axios';

const store = {
  namespaced: 'true',
  state: {
    posts: null,
    isLoadingPosts: false,
    isLoadingPostDetails: false,
  },
  getters: {
    GET_POST_BY_ID: state => id => state.posts.find(todo => todo.id === id),
  },
  mutations: {
    SET_IS_LOADING_POSTS: (state, payload) => {
      state.isLoadingPosts = payload;
    },
    SET_IS_LOADING_POST_DETAILS: (state, payload) => {
      state.isLoadingPostDetails = payload;
    },
    SET_POSTS: (state, payload) => {
      state.posts = payload;
    },
    SET_POST_DETAILS: (state, payload) => {
      state.posts = state.posts.map((post) => {
        if (post.id !== payload.postId) {
          return post;
        }

        return Object.assign({}, post, {
          comments: payload.postComments,
        });
      });
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
    GET_POST_DETAILS: async ({ commit }, postId) => {
      commit('SET_IS_LOADING_POST_DETAILS', true);

      const { data: postComments } = await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

      commit('SET_POST_DETAILS', { postId, postComments });
      commit('SET_IS_LOADING_POST_DETAILS', false);
    },
  },
};

export default store;
