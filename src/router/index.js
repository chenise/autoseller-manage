import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Login  from  '../views/Login'
import  PageNotFound from '../views/PageNotFound'

Vue.use(Router)

export const constantRouterMap  = [
  {
    path: '/login',
    component: Login,
    name: '登录'
  },

  {
    path: '/404',
    component: PageNotFound,
    name: '404'
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
    }
];

export const asyncRouterMap = [];

export default new Router({
  routes: constantRouterMap
})
