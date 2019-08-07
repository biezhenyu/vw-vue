import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

// less
import './assets/less/reset.less';

// 解决es6兼容
import 'babel-polyfill';


// vant
import { Button,
  CellGroup,
  Cell,
  Icon,
  List,
  Toast } from 'vant';
Vue.use(Button).use(CellGroup).use(Icon).use(List).use(Cell).use(Toast);



import filters from './filters'; // 全局过滤器
Vue.prototype.$filters = filters;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
