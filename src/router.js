import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    { path: '/list', components: require('./pages/list/list.vue') },
    { path: '/detail', components: require('./pages/detail/detail.vue') },
    { path: '*', components: require('./pages/home/home.vue') }
  ]
});