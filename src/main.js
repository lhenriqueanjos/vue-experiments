import Vue from 'vue';
import { App, router, store } from '@/core';
import './registerServiceWorker';
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
