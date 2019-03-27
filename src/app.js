import Vue from 'vue';
import App from './app.vue';
import router from './router';

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})