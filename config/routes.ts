import Home from '../src/pages/home';

export const defaultRoutes = [
  {
    path: '/dashboard',
    exact: true,
    meta: { title: '控制台' },
    open: false,
    component: './dashboard',
  },
  {
    path: '/setting',
    meta: { title: '设置' },
    open: false,
    // component: './setting', //在这里使用component的话，需要在这个component里面使用props.children来作为下面routes的出口
    routes: [
      {
        path: '/setting/frontend',
        component: './setting/frontend',
        meta: { title: '前台设置' },
      },
      {
        path: '/setting/backend',
        component: './setting/backend',
        meta: { title: '后台设置' },
      },
      {
        path: '/setting/theme',
        component: './setting/theme',
        meta: { title: '主题设置' },
      },
    ],
  },
];

export default [
  {
    // exact: true, //不能设置exact:true，否则会导致匹配不到defaultRoutes
    path: '/',
    component: '@/layouts/index',
    // wrappers: ['./Authorized'],
    routes: [...defaultRoutes],
  },
  {
    path: '/login',
    exact: true,
    layout: false,
    component: './login',
    meta: { title: '登录' },
  },
  // ...defaultRoutes,
];
