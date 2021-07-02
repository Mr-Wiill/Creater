/**
* 判断微信浏览器类型
*/
export function isWxBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    let isWx = ua.match(/MicroMessenger/i) == "micromessenger";
    if (!isWx) {
      return false;
    } else {
      let isWxWork = ua.match(/WxWork/i) == "wxwork";   // 企业微信
      if (isWxWork) {
        return 'wxwork';
      } else {
        return 'wx';
      }
    }
  }