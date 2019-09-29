import Vue from 'vue';
import Router from 'vue-router';
import { routes as homeRoutes } from '@/home';
import * as experimentsModule from '@/experiments';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    ...homeRoutes,
    ...experimentsModule.lazyLoadedRoutes.routes,
    ...experimentsModule.scopedSlots.routes,
  ],
});
