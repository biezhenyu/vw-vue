import store from "@/store/index";
let commonRouter;
export default commonRouter = [
  {
    path: 'home',
    name: 'home',
    
    component: () => import(/* webpackChunkName: "home" */ '../../views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
];
