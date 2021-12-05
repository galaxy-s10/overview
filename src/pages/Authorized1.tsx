// import { useState, memo } from 'react';
// import { Redirect } from 'umi';
// import Login from './login';
// import CacheModel from '../libs/cache';
// import { getUserInfo } from './login/server';
// import { UserStore } from '../store/index';

// const AuthCpt = function (props) {
//   const [isLogin, setIsLogin] = useState(false);
//   const { setUserInfo } = UserStore();
//   console.log('开始鉴权');
//   const token = CacheModel.getStorageExt('token');
//   if (token) {
//     console.log('有token，判断token');
//     // getUserInfo().then((res) => {
//     //   console.log('获取用户信息成功', res);
//     //   setUserInfo(res.userInfo);
//     setIsLogin(true);
//     // });
//   } else {
//     console.log('无token，重定向登录');
//     setIsLogin(false);
//   }
//   if (isLogin) {
//     console.log('登录了');
//     return <div>{props.children}</div>;
//   }
//   console.log('未登录');
//   return <Login></Login>;
//   // return <Redirect to="/login"></Redirect>;
// };
// export default memo(AuthCpt);
