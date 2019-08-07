import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from '../layout/DefaultLayout.vue';
import commonRouter from './common/index';
import store from '@/store/index';


Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: '/',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        ...commonRouter
      ]
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  next();
});

// 动态路由加载失败的时候重新刷新
router.onError(() => {
  console.log('路由错误');
  window.location.reload();
});

export default router;
