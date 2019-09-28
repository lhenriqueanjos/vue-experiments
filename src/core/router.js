import Vue from 'vue';
import Router from 'vue-router';
import { routes as homeRoutes } from '@/home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...homeRoutes,
  ],
});
