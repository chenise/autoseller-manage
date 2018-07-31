import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Login  from  '../views/Login'
import  PageNotFound from '../views/PageNotFound'
import  Index from  '../views/Index'

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
    path: '/',
    component: Index,
    name: "首页"
  }
];

export const asyncRouterMap = [{
  path: '*',
  hidden: true,
  redirect: { path: '/404' }
  }];

export default new Router({
  routes: constantRouterMap,
  mode:"history"
})
