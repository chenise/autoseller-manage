// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './vuex/store'


import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
const  whiteList = [];
router.beforeEach((to,from,next) => {
  if(whiteList.indexOf(to.path)){
    if(to.path === '/login'){
      sessionStorage.removeItem('user');
    }
  next(to.path)
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if(!user) {
    next({path: '/login'})
  }
  if(store.user.menus === undefined){
    store.dispatch('getMenu').then

  }
  else {
    next();
  }

})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
