// 全局过滤器配置

import moment from "moment"; // 时间处理库
import Vue from "vue";

let filtersData: any = {

  // 处理时间
  dateFormat: (value: string, fmt = "YYYY-MM-DD") => {
    return value ? moment(value).format(fmt) : "";
  },

  // 处理手机号
  phoneFormat: (value: string) => {
    return value ? value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') : "";
  },

  // 处理身份证
  IDCardFormat: (value: string) => {
    return value ? value.replace(/^(.{4})(?:\d+)(.{4})$/, "$1******$2") : "";
  }
};

for (const key in filtersData) {
  Vue.filter(key, filtersData[key]);
}
export default filtersData;
