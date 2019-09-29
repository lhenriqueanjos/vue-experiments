export default [
  {
    path: '/scoped-slots',
    name: 'scopedSlots',
    component: () => import(/* webpackChunkName: "scopedSlots" */ './views/ScopedSlots.vue'),
  },
];
