// axios默认配置，如如特需需求，不用修改
import axios from 'axios';
// import qs from 'qs';
//此文件配置请求前置操作,后置操作
//若增加log可以写到此文件

const instance = axios.create({
  // `url` is the server URL that will be used for the request
  // url: '/user',

  // `method` is the request method to be used when making the request
  method: 'post', // default

  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 60000,

  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default


  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 0, // default

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  /*cancelToken: new CancelToken(function (cancel) {
  })*/
});
instance.interceptors.response.use(response => {
  return response;
}, error => {
  // 这里我们把错误信息扶正, 后面就不需要写 catch 了
  return Promise.resolve({
    exception: [error.response.status, error.response.statusText, error.response.request.responseURL].join(" "),
    msg: error.response.statusText,
    status: error.response.status,

    // eslint-disable-next-line
    data: error.response.statusText,
  });
});
export default instance;