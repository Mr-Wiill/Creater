/**
 * axios基础构建
 * 
 */

import instance from './intercept';
import type { AxiosRequest, CustomResponse } from './types';
import { showFailToast } from "vant";

class HttpRequest {
    // 外部传入的baseUrl
    // protected baseURL: string = process.env.VUE_APP_BaseURL; 
    protected baseURL = '';
    // 自定义header头
    protected headers = {
        token: localStorage.getItem('token')
    }

    private apiAxios({ baseURL = this.baseURL, headers = this.headers, method, url, data, params, responseType, auth }: AxiosRequest): Promise<CustomResponse> {
        return new Promise((resolve, reject) => {
            instance({
                baseURL,
                headers,
                method,
                url,
                params,
                data,
                responseType,
                auth
            }).then((res) => {
                const message = res?.data?.message || res?.data?.msg;
                // 200:服务端业务处理正常结束
                if (res.status === 200 && (res.data.code === 0 || res.data.code === 1 || res.data instanceof Blob || res.data.code === 10004))
                    resolve({ status: true, message: message, data: res.data?.data, origin: res.data });
                else if (res.data.code === 10001) {
                    // if (!headers?.token) window.location.reload()
                    localStorage.clear()
                    sessionStorage.clear()
                    window.location.href = "#/login?returnUrl=" + window.location.hash.substring(2)
                }
                else
                    showFailToast(message || ('接口请求失败')), reject({ status: false, message, data: null });
            }).catch((err) => {
                const message = err?.data?.errorMessage || err?.data?.message || err?.msg || ('接口请求失败');
                showFailToast(message)
                reject({ status: false, message, data: null });
            });
        });
    }

    /**
     * GET类型的网络请求
     */
    protected getReq({ baseURL, headers, url, data, params, responseType, auth }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'GET', url, data, params, responseType, auth });
    }

    /**
     * POST类型的网络请求
     */
    protected postReq({ baseURL, headers, url, data, params, responseType, auth }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType, auth });
    }

    /**
     * form-data类型的网络请求
     */
    protected formDataReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        const form = new FormData()
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                form.append(key, element)
            }
        }
        data = form
        return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType });
    }

}

export default HttpRequest;
