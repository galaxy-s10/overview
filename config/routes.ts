export const defaultRoutes = [
  // {
  //   path: '/home',
  //   exact: true,
  //   meta: { title: '主页' },
  //   open: false,
  //   component: './home',
  // },
  // {
  //   path: '/test',
  //   exact: true,
  //   layout: false,
  //   component: './mobxContext',
  //   meta: { title: 'mobxContext' },
  // },
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
    open: true,
    // component: './setting', //在这里使用component的话，需要在这个component里面使用props.children来作为下面routes的出口
    routes: [
      {
        path: '/setting/frontend',
        // component: './setting/frontend',
        meta: { title: '前台设置' },
        // open: true,
        routes: [
          {
            path: '/setting/frontend/base',
            component: './setting/frontend/base',
            open: true,
            meta: { title: '基本设置' },
          },
          {
            path: '/setting/frontend/high',
            component: './setting/frontend/high',
            open: true,

            meta: { title: '高级设置' },
          },
        ],
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

export const componentRoutes = [
  {
    path: '/common',
    // exact: true,
    meta: { title: '通用' },
    open: true,
    routes: [
      {
        path: '/common/button',
        meta: { title: 'Button 按钮' },
        component: './button',
      },
      {
        path: '/common/icon',
        meta: { title: 'Icon 图标' },
        component: './icon',
      },
    ],
  },
  {
    path: '/fankui',
    // exact: true,
    meta: { title: '反馈' },
    open: true,
    routes: [
      {
        path: '/fankui/toast',
        meta: { title: 'Toast 轻提示' },
        component: './toast',
      },
      {
        path: '/fankui/message',
        meta: { title: 'Message 全局提示' },
        component: './message',
      },
      {
        path: '/fankui/modal',
        meta: { title: 'Modal 对话框' },
        component: './modal',
      },
      {
        path: '/fankui/spin',
        meta: { title: 'Spin 加载中' },
        component: './spin',
      },
    ],
  },
  {
    path: '/dataShow',
    // exact: true,
    meta: { title: '数据展示' },
    open: true,
    routes: [
      {
        path: '/dataShow/table',
        meta: { title: 'Table 表格' },
        component: './table',
      },
      {
        path: '/dataShow/empty',
        meta: { title: 'Empty 空状态' },
        component: './empty',
      },
    ],
  },
  {
    path: '/dataInput',
    // exact: true,
    meta: { title: '数据录入' },
    open: true,
    routes: [
      {
        path: '/dataInput/switch',
        meta: { title: 'Switch 开关' },
        component: './switch',
      },
    ],
  },
  {
    path: '/other',
    // exact: true,
    meta: { title: '其他' },
    open: true,
    routes: [
      {
        path: '/other/backTop',
        meta: { title: 'BackTop 回到顶部' },
        component: './backTop',
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
    // routes: [...componentRoutes],
    routes: [...componentRoutes, ...defaultRoutes],
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
