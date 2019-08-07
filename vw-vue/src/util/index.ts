import { CommonObj } from '@/types'; 

class Util {

  // 四舍五入
  public getRound(num: number, len: number): number {
    return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
  }

  // 截流
  public throttle() {
    let time: any = null;
    return function(cb: (argument?: any) => void, delay: number) {
      if (time) return;
      time = setTimeout(() => {
        cb(time);
        clearTimeout(time);
        time = null;
      }, delay);
    };
  }

  // 处理定时器
  public countDown() {
    let timer: any = null;
    return function(cb: (argument?: any) => void, time: number, delay: number) {
      if (timer) return;
      timer = setInterval(() => {
        if (time > 1) {
          time --;
        } else {
          cb();
          clearInterval(timer);
          timer = null;
        }
      }, delay);
    };
  }

  // 验证手机号码
  public checkPhone(val: string): boolean {
    // 如果字符串后面有空格先去掉空格
    val = val.replace(/\s*$/g, '');

    let check = /^1(3|4|5|7|8)\d{9}$/;
    return check.test(val);
  }

  // 验证中文姓名
  public checkName(val: string): boolean {
    val = val.replace(/\s*$/g, '');

    // return /^([a-zA-Z\u4e00-\u9fa5\·]{2,20})$/.test(val);
    return  /^[\u4e00-\u9fa5|0-9|a-zA-Z|\·]+$/.test(val);
  }

  // 验证6位验证码
  public checkCode(val: string): boolean {
    return /^([0-9]{6})$/.test(val);
  }

  // 重置字体
  public resetFontSize(): void {
    let self: Util = this;
    (function(doc, win) {
      let docEl: any = doc.documentElement;
      let resizeEvt: string = 'orientationchange' in window ? 'orientationchange' : 'resize';
      let recalc = function() {
          let clientWidth = docEl.clientWidth;
           // @ts-ignore: Unreachable code error
          let htmlFontSzie: number = Number(document.getElementsByTagName('html')[0].style.fontSize.slice(0, -2));
          if (htmlFontSzie && htmlFontSzie > 0 && self.getDevice() !== 'pc') return; 

          if (!clientWidth) return;
          if (docEl.clientWidth > docEl.clientHeight) {
            docEl.style.fontSize = docEl.clientHeight / 10 + 'px';
          } else {
            docEl.style.fontSize = docEl.clientWidth / 10 + 'px';
          }
        };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
  }

  /**
   * 适配移动端图片
   * @param {String} url 图片地址
   */
  public getDevicePixelRatio(url: string): string {
    let pixelRatio = window.devicePixelRatio;
    if (pixelRatio === 1) {
      return  require(`@/assets/images/${url}.png`);
    } else if (pixelRatio >= 1.5 && pixelRatio < 2.5) {
      return  require(`@/assets/images/${url}@2x.png`);
    } else if (pixelRatio >= 2.5 && pixelRatio <= 3) {
      return  require(`@/assets/images/${url}@3x.png`);
    }
    return '';
  }

  // 获取url参数
  public getUrlParams(): CommonObj {
    let q: CommonObj = {};
    location.href.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => q[k] = v);
    return q;
  }

  // 获取浏览器版本
  public getDevice(): string {
      console.log(navigator.userAgent.toLowerCase());
      let sUserAgent: any = navigator.userAgent.toLowerCase();
      let bIsIpad: boolean = sUserAgent.match(/ipad/i) === "ipad";
      let bIsIphoneOs: boolean = sUserAgent.match(/iphone os/i) === "iphone os";
      let isWeixn: boolean =  sUserAgent.indexOf('mqqbrowser') > 0 ? true : false;
      let bIsMidp: boolean = sUserAgent.match(/midp/i) === "midp";
      let bIsUc7: boolean = sUserAgent.match(/rv:1.2.3.4/i) === "rv:1.2.3.4";
      let bIsUc: boolean = sUserAgent.match(/ucweb/i) === "ucweb";
      let bIsAndroid: boolean = sUserAgent.match(/android/i) === "android";
      let bIsCE: boolean = sUserAgent.match(/windows ce/i) === "windows ce";
      let bIsWM: boolean = sUserAgent.match(/windows mobile/i) === "windows mobile";
      let device = bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || isWeixn
        ? 'phone'
        : 'pc';
      return device;
  }
}

export default new Util();
