export default [
  {
    path: '/people-counter',
    alias: '/🔢',
    name: 'peopleCounter',
    component: () => import(/* webpackChunkName: "stateManagement" */ './PeopleCounter.screen.vue'),
  },
  {
    path: '/social-feed/post/:postId',
    name: 'postDetails',
    component: () => import(/* webpackChunkName: "stateManagement" */ './PostDetails.screen.vue'),
  },
  {
    path: '/social-feed',
    alias: '/👥',
    name: 'socialFeed',
    component: () => import(/* webpackChunkName: "stateManagement" */ './SocialFeed.screen.vue'),
  },
];
