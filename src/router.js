import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home/home.vue';
import List from './pages/list/list.vue';
import Detail from './pages/detail/detail.vue';

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
    { path: '/list', component: List },
    { path: '/detail', component: Detail },
    { path: '*', component: Home }
  ]
});