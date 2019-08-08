// get请求时拼接参数
export interface Params {
  name: string;
  method: string; 
  url: string;
  [propName: string]: any;
}

// 接口请求穿的参数
export interface RequestParams {
  [propName: string]: any;
}

// 定义函数接口
export type CommonFunc = (ob1: any, ob2?: any, ob3?: any) => object;

// 这些只是方便提示
interface LoginApi {
  test(params?: RequestParams, headers?: {}, callback?: CommonFunc, errorCallback?: CommonFunc): Promise<any>;
  [propName: string]: any;
}


export interface Api {
  login: LoginApi;
  [propName: string]: any;
}

// 类型断言
export let ApiObj: Api = {} as Api;
