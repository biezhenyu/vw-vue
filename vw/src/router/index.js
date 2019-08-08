import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/layout/default';
import common from './common';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: layout,
      beforeEnter(to, from, next) {
        next();
      },
      children: [
        {
          path: '/',
          redirect: '/home'
        }
      ].concat(common)
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
});
// 不需要校验的路由数组
const filterRouters = ['errorPage', 'home'];

// 全局钩子，可以在这里做校验（登陆和权限）
router.beforeEach((to, from, next) => {
  
  // 直接跳转
  if (filterRouters.indexOf(to.name) !== -1) {
    next();
  } 

});

export default router;

