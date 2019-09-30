/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    user_ID:localStorage.getItem('YST_ID')||'',
    status:'',
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    increment (state) {
      state.count++
    },
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state,user) {
      state.status = 'success';
      state.user_ID = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = ''; 
      state.token = '';
    },
  },
  actions: {

  }
})
