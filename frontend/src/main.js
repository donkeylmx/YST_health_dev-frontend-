/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service-worker'
import YDUI from 'vue-ydui'; 
import 'vue-ydui/dist/ydui.rem.css';
import axios from 'axios'
import Qs from 'qs'
import cookie from './assets/cookie/cookie.js'
import http from './axios'
import Api from './api'
Vue.prototype.api = Api;
Vue.prototype.axios = axios;
Vue.prototype.Qs = Qs;
Vue.prototype.$cookie = cookie;
Vue.prototype.http = http;
Vue.config.productionTip = true;
Vue.use(YDUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
