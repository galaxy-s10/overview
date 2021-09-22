import type { AxiosResponse, AxiosError } from 'axios';
import axios from 'axios';
import cache from '@/libs/cache';
import { message } from 'antd';

const service = axios.create({
  // baseURL: myUrl,
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    const token = cache.getStorageExt('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    console.log('响应拦截', error);
    // 如果没有响应信息
    if (!error.response) {
      return message.error(error.message);
    }
    const { status, data } = error.response;

    // 服务器会返回400系列状态码：
    // 400参数错误
    // 401授权错误
    // 403权限不足
    // 404未找到
    const whiteList = ['400', '401', '403', '404'];
    if (status == 401) {
      // if (status == 401 || status == 403) {
      cache.clearStorage('token');
      message.error({
        content: status + '：' + data.message,
      });
      return Promise.reject(data);
    } else if (status == 403) {
      message.error({
        content: status + '：' + data.message,
      });
      return Promise.reject(data);
    } else if (status == 400) {
      message.error({
        content: status + '：' + data.message,
      });
      return Promise.reject(data);
    }
    return Promise.reject(data);
  },
);

export default service;
