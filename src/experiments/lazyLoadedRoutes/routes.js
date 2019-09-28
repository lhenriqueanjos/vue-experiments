import { LazyLoadComponent } from '@/components';

export default [
  {
    path: '/lazy-loaded-view',
    alias: '/😴',
    name: 'lazyLoadedView',
    component: () => LazyLoadComponent(import(/* webpackChunkName: "lazyLoadedView" */ './views/LazyLoadedView.vue')),
  },
];
