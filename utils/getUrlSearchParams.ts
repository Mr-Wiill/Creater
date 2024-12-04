/**
 * 
 * @param key 参数名，如不传返回参数对象
 * @param url 链接
 * @returns 
 */
function getUrlSearchParams(key?: string, url?: string): any {
    url = url || window.location.href;
    const urlParams = new URLSearchParams(url.split('?')[1]);
    const params = {};
    for (let param of urlParams.entries()) {
        params[param[0]] = param[1];
    }
    return key ? params[key] : params;
}