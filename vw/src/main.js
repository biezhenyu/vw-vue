import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';  

Vue.config.productionTip = false;

// 全局过滤器
import filters from './filters'; 
Vue.prototype.$filters = filters;

// 解决es6兼容
import 'babel-polyfill';

// 引入api配置，组件中可通过(this.#api)调用
import api from './api';
Vue.prototype.$api = api;

// 引入工具类，组件中可通过(this.#util)调用
import util from './util';
Vue.prototype.$util = util;

import './assets/less/reset.less';

// vant
import { Button,
  CellGroup,
  Cell,
  Icon,
  List,
  Skeleton,
  Toast } from 'vant';
Vue.use(Button).use(CellGroup).use(Icon).use(List).use(Cell).use(Toast).use(Skeleton);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
