import { makeAutoObservable, configure } from 'mobx';
import CacheModel from '@/libs/cache';

configure({
  useProxies: 'never',
});

interface userInfo {
  token: string | null;
  remember: boolean;
  roles: string[];
  auth: string[];
  username: string | null;
  id: number | null;
  status: number | null;
  avatar: string | null;
  title: string | null;
  addRoutes: string[] | null;
  exp: number;
}

class User {
  constructor() {
    makeAutoObservable(this);
  }

  token: userInfo['token'] = null;
  remember: userInfo['remember'] = false; // 七天内免登
  roles: userInfo['roles'] = [];
  auth: userInfo['auth'] = [];
  username: userInfo['username'] = null;
  id: userInfo['id'] = null;
  status: userInfo['status'] = null;
  avatar: userInfo['avatar'] = null;
  title: userInfo['title'] = null;
  addRoutes: userInfo['addRoutes'] = [];

  setUserToken = (token: userInfo['token'], exp: userInfo['exp']) => {
    console.log('触发了setUserToken', token);
    this.token = token;
    CacheModel.setStorageExt('token', token, exp);
    console.log(CacheModel.getStorageExt('token'), '----');
  };

  setUserInfo = (data: userInfo) => {
    console.log('触发了setUserInfo', data);
    this.addRoutes = data.addRoutes;
    this.auth = data.auth;
    this.avatar = data.avatar;
    this.id = data.id;
    this.remember = data.remember;
    this.roles = data.roles;
    this.status = data.status;
    this.title = data.title;
    this.username = data.username;
  };
}
export default new User();
