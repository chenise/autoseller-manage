import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import  user from './modules/user'
import  actions  from  './actions'
import  mutations from  './mutations'
Vue.use(Vuex)

const  store= new  Vuex.Store({
  modules: {
    user
  },
  state: {
    targetPath: '/'
  },
  getters,
  mutations,
  actions
});

export  default  store
