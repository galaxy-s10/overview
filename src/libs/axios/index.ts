import axios from 'axios';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import cache from '@/libs/cache';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const service = axios.create({
  // baseURL: 'http://localhost:3100',
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    NProgress.start();
    const token = cache.getStorageExp('token');
    if (token) {
      if (config?.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    NProgress.done();
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  (error) => {
    NProgress.done();
    console.log(error);
    console.log(error.response);
    // console.log(error.response.status);
    // 服务器会返回400系列状态码：
    // 400参数错误
    // 401授权错误
    // 403权限不足
    // 404未找到
    const whiteList = ['400', '401', '403', '404'];
    // 如果返回的不是400系列错误码
    if (
      error &&
      error.response &&
      whiteList.indexOf(`${error.response.status}`) === -1
    ) {
      console.log(error.response);
      return Promise.reject();
    }
    if (error.response) {
      // if (error.response && error.response.status != 500) {
      if (error.response.status === 401) {
        // if (error.response.status == 401 || error.response.status == 403) {
        cache.clearStorage('token');
        // 下面有个return，代表不会继续向下执行
        // 也就是说，如果网络请求报了401，有return，就不会继续执行axios，就不会返回reject
        // return "请求失败，axios执行到这里，直接返回return的数据（不走reject，因此axios错误不会被catch，会被then）"
        return Promise.reject(error.response.data);
      }
      if (error.response.status === 403) {
        return Promise.reject(error.response.data);
      }
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
    }
    return Promise.reject(error.response);
  }
);

export default service;
