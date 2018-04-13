// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Allcurrencies from './routes/Allcurrencies.vue'
import Eth from './routes/Eth.vue'



Vue.use(VueRouter);

const routes = [
  { path: '/allcurrencies', component: Allcurrencies},
  { path: '/eth', component: Eth}
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
