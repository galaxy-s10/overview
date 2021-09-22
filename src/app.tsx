import { getUserInfo } from './pages/login/server';
import Login from './pages/login';
import CacheModel from './libs/cache';
import { UserStore } from './store';
import { history } from 'umi';
export const locale = {
  // getLocale() {
  //   console.log('我是app.tsx');
  //   // return 'en';
  //   return 'ar';
  // },
};
// getInitialState:https://umijs.org/zh-CN/plugins/plugin-initial-state#getinitialstate
export async function getInitialState() {
  console.log('开始设置初始状态');
  const token = CacheModel.getStorageExt('token');
  // console.log(setUserInfo, '++++');

  // 如果是登录页面，不执行
  if (history.location.pathname !== '/login') {
    console.log('当前不是登录页面');
    if (token) {
      // const { setUserInfo } = UserStore(); //react hook 不能在组件之外使用。UseStore本质上也是useContext
      console.log('有token，判断token');
      const res = await getUserInfo();
      console.log('获取用户信息成功', res);
      return res.userInfo;
    } else {
      // const { setUserInfo } = UserStore();
      // console.log(setUserInfo, '---');
      console.log('无token，重定向登录页面');
      history.push('/login');
      // return <Login></Login>;
    }
  }
}
