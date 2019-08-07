
// api 的配置
export interface ApiParams {
  name: string;
  method: string; 
  url: string;
}

export interface CommonObj {
  [propName: string]: string;
}
