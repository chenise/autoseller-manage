// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './vuex/store'
//import Mock  from  'mockjs'


import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
const  whiteList = ['/','/login','/404'];
router.beforeEach((to,from,next) => {
  let user = JSON.parse(sessionStorage.getItem('user'));
  alert(to.path);
  if(whiteList.indexOf(to.path) >= 0){
    if(to.path === '/login'){
      sessionStorage.removeItem('user');
    }
    next();
  }
  else if (!user || store.menus.lenth <= 0) {
    store.dispatch('saveTarget',to.path);
    next({path: '/login'});
  }
  else {
    next();
  }

})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
