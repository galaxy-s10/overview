import request from '@/plugins/request';
import type { loginInterface } from './interface';

export function login(info: loginInterface) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: {
      ...info,
    },
  });
}

export function register(data) {
  return request({
    url: '/api/user/add',
    method: 'post',
    data,
  });
}

export function getUserInfo() {
  return request({
    url: '/api/user/getuserinfo',
    method: 'get',
  });
}
