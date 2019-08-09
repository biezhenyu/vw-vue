// api配置工厂，建议模块化管理
import axios from './apiConfig';
import test from './demo';
import {Toast} from 'vant';

let apiConfig = {
  // 不同模块的请求需要import进来
  test
};

// get请求时拼接参数
function formatParams(params) {
  let str = [];
  for (const key in params) {
    str.push(`${key}=${params[key]}`);
  }
  return str.join("&");
}

// 根据环境生成请求地址
function getUrl(params, item) {

  // 判断环境
  let url = process.env.NODE_ENV === "development" ? "" : process.env.VUE_APP_API_URL;

  // 判断请求方式
  url += item.method === 'get' ? `${item.url}?${formatParams(params)}` : item.url;
  return url;
}

// 生成api方法
// eslint-disable-next-line
function toApi(apiConfig) {
  const api = {};

  // 循环模块
  for (const module in apiConfig) {
    api[module] = {};

    // 循环模块下的请求配置
    apiConfig[module].forEach((item) => {

      // 生成对应请求方法
      api[module][item.name] = (params, callback) => {

        return axios({
          method: item.method || 'post',
          url: getUrl(params, item),
          data: params,
        })
          .then(response => {
            if (response.status && response.status !== 200) Toast.fail(response.msg);
            return response ? response.data : {
              msg: '请求失败，没有返回信息！'
            };
          })

          // 可以在这里修正一些接口返回的不适合的信息
          .then(response => {
            if (callback) callback(params, item);
            if (response.code && response.code !== 0) Toast.fail(response.msg);
            return response;
          })
          .catch(error => {
            Toast.fail('请求报错了');
            return {
              error,
              msg: 'catch —— 请求报错了，捕获错误信息！' + error,
            };
          });
      };
    });
  }
  return api;
}

let api = toApi(apiConfig);

export default api;