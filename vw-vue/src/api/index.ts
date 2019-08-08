// api配置工厂，建议模块化管理
import axios from './apiConfig';
import {Toast} from 'vant';
import store from '@/store/index';
import login from './login';
import {Params, RequestParams, CommonFunc, Api, ApiObj} from '../types/api';

interface ApiConfig {
  [propName: string]: Params[];
}
let apiConfig: ApiConfig  = {
  login
};

function formatParams(params: RequestParams) {
  let str = [];
  for (const key in params) {
    str.push(`${key}=${params[key]}`);
  }
  return str.join("&");
}

// 根据环境生成请求地址
function getUrl(params: RequestParams, item: Params) {

 // 判断环境
 let url = process.env.NODE_ENV === "development" ? "" : process.env.apiPath;
 // 判断请求方式
 url += item.method === 'get' ? `${item.url}?${formatParams(params)}` : item.url;
 return url;
}


// 生成api方法
function toApi() {
  const api: Api  = ApiObj;

  // 循环模块
  for (const module in apiConfig) {
    api[module] = {};
    // 循环模块下的请求配置
    apiConfig[module].forEach((item) => {


      // 生成对应请求方法
      api[module][item.name] = (params: RequestParams, headers: any = {}, callback: CommonFunc, errorCallback: CommonFunc) => {
        
        // @ts-ignore: Unreachable code error
        let header = {
          "Content-Type": "application/x-www-form-urlencoded"
        };
        /**
         * form 请求头格式
         * urlParams  参数拼接url后面
         * prefix 是否以formData格式提交
         */

        // tost配置
       const method: any = item.method || 'post';
       
        return axios({
          method,
          url: getUrl(params, item),
          data: params,
          headers: {...headers, ...header}
        })
        .then((response: any) => {
          return response ? response.data : {msg: '请求失败，没有返回信息！'};
        })

        // 可以在这里修正一些接口返回的不适合的信息
        .then((response: any)  => {
          if (item.needTost) Toast.clear();

          if (response.status && response.status !== 200) {
            Toast.fail(response.statusText);
            return response;
          }
          
          if (response.returnCode && response.returnCode !== '0000') {
            Toast.fail(response.returnMessage);
            return response;
          }
          
          return response;
        })
        .catch((error: Error) => {
          
          Toast.fail('请求报错了！');
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


const api = toApi();
export default api;
