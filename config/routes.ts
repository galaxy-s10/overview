interface IRoutes {
  path: string;
  exact?: boolean;
  meta?: {
    title: string;
  };
  open?: boolean;
  component?: string;
  routes?: IRoutes[];
}
export const defaultRoutes: IRoutes[] = [
  {
    path: '/dashboard',
    exact: true,
    meta: { title: '控制台' },
    open: false,
    component: './dashboard',
  },
];

export const libs: IRoutes[] = [
  {
    path: '/libs',
    meta: { title: '封装类库' },
    open: false,
    // component: './setting', //在这里使用component的话，需要在这个component里面使用props.children来作为下面routes的出口
    routes: [
      {
        path: '/libs/js',
        // component: './setting/frontend',
        meta: { title: 'javaScript' },
        open: false,
        routes: [
          {
            path: '/libs/js/common',
            component: './libs/js/common',
            open: false,
            meta: { title: '通用方法' },
          },
          {
            path: '/libs/js/business',
            component: './libs/js/business',
            open: false,
            meta: { title: '业务相关' },
          },
        ],
      },
      {
        path: '/libs/css',
        component: './libs/css',
        meta: { title: 'css' },
      },
      {
        path: '/libs/other',
        component: './libs/other',
        meta: { title: '其他' },
      },
    ],
  },
];

export const myLifeRoutes: IRoutes[] = [
  {
    path: '/myLife',
    component: './myLife',
    meta: { title: 'Life' },
    // routes: [],
  },
];

export const standardRoutes: IRoutes[] = [
  {
    path: '/standard',
    component: './standard',
    meta: { title: '规范' },
    // routes: [],
  },
];

export const reactComponentRoutes: IRoutes[] = [
  {
    path: '/reactComponents',
    // exact: true,
    meta: { title: 'react组件' },
    open: false,
    routes: [
      // {
      //   path: '/reactComponents/common',
      //   // exact: true,
      //   meta: { title: '通用' },
      //   open: false,
      //   routes: [
      //     {
      //       path: '/reactComponents/common/button',
      //       meta: { title: 'Button 按钮' },
      //       component: './reactComponents/button',
      //     },
      //     {
      //       path: '/reactComponents/common/icon',
      //       meta: { title: 'Icon 图标' },
      //       component: './reactComponents/icon',
      //     },
      //   ],
      // },
      {
        path: '/reactComponents/feedback',
        // exact: true,
        meta: { title: '反馈' },
        open: false,
        routes: [
          {
            path: '/reactComponents/feedback/toast',
            meta: { title: 'Toast 轻提示' },
            component: './reactComponents/toast',
          },
          // {
          //   path: '/reactComponents/feedback/message',
          //   meta: { title: 'Message 全局提示' },
          //   component: './reactComponents/message',
          // },
          // {
          //   path: '/reactComponents/feedback/modal',
          //   meta: { title: 'Modal 对话框' },
          //   component: './reactComponents/modal',
          // },
          // {
          //   path: '/reactComponents/feedback/spin',
          //   meta: { title: 'Spin 加载中' },
          //   component: './reactComponents/spin',
          // },
        ],
      },
      // {
      //   path: '/reactComponents/dataShow',
      //   // exact: true,
      //   meta: { title: '数据展示' },
      //   open: false,
      //   routes: [
      //     {
      //       path: '/reactComponents/dataShow/table',
      //       meta: { title: 'Table 表格' },
      //       component: './reactComponents/table',
      //     },
      //     {
      //       path: '/reactComponents/dataShow/empty',
      //       meta: { title: 'Empty 空状态' },
      //       component: './reactComponents/empty',
      //     },
      //   ],
      // },
      // {
      //   path: '/reactComponents/dataInput',
      //   // exact: true,
      //   meta: { title: '数据录入' },
      //   open: false,
      //   routes: [
      //     {
      //       path: '/reactComponents/dataInput/switch',
      //       meta: { title: 'Switch 开关' },
      //       component: './reactComponents/switch',
      //     },
      //   ],
      // },
      // {
      //   path: '/reactComponents/other',
      //   // exact: true,
      //   meta: { title: '其他' },
      //   open: false,
      //   routes: [
      //     {
      //       path: '/reactComponents/other/backTop',
      //       meta: { title: 'BackTop 回到顶部' },
      //       component: './reactComponents/backTop',
      //     },
      //   ],
      // },
    ],
  },
];

export const vue2ComponentRoutes: IRoutes[] = [
  {
    path: '/vue2Component',
    component: './vue2Components',
    meta: { title: 'vue2组件' },
    // routes: [],
  },
];

export const littleBugsRoutes: IRoutes[] = [
  {
    path: '/littleBugs',
    component: './littleBugs',
    meta: { title: '踩坑' },
    // routes: [],
  },
];
export const codeLangRoutes: IRoutes[] = [
  {
    path: '/codeLang',
    meta: { title: '编程语言' },
    routes: [
      {
        path: '/codeLang/js',
        component: './codeLang/js',
        meta: { title: 'Js' },
      },
      {
        path: '/codeLang/ts',
        component: './codeLang/ts',
        meta: { title: 'Ts' },
        routes: [
          {
            path: '/codeLang/ts/tsconfig/',
            component: './codeLang/ts/tsconfig',
            meta: { title: 'tsconfig' },
          },
        ],
      },
    ],
  },
];

export const blogRoutes: IRoutes[] = [
  {
    path: '/blog',
    meta: { title: '博客' },
    routes: [
      {
        path: '/blog/client',
        meta: { title: '前台' },
        routes: [
          {
            path: '/blog/client/nuxt',
            component: './blog/client/nuxt',
            meta: { title: 'nuxt' },
          },
        ],
      },
      {
        path: '/blog/admin',
        meta: { title: '后台' },
        routes: [
          {
            path: '/blog/admin/vue2',
            component: './blog/admin/vue2',
            meta: { title: 'vue2' },
          },
        ],
      },
      {
        path: '/blog/server',
        meta: { title: '后端' },
        routes: [
          {
            path: '/blog/server/node',
            component: './blog/server',
            meta: { title: 'node' },
          },
        ],
      },
    ],
  },
];

export const bookMarkRoutes: IRoutes[] = [
  {
    path: '/bookMark',
    component: './bookMark',
    meta: { title: '书签' },
  },
];

export const todoRoutes: IRoutes[] = [
  {
    path: '/todo',
    component: './todo',
    meta: { title: 'Todo' },
  },
];

export const introduceRoutes: IRoutes[] = [
  {
    path: '/introduce',
    exact: true,
    component: './introduce',
    meta: { title: '介绍' },
  },
];

export const leetCodeRoutes: IRoutes[] = [
  {
    path: '/leetCode',
    exact: true,
    component: './leetCode',
    meta: { title: '算法' },
  },
];

export const littleProjectRoutes: IRoutes[] = [
  {
    path: '/project',
    meta: { title: '小项目' },
    routes: [
      {
        path: '/project/music',
        component: './project/music',
        meta: { title: '网易云音乐' },
      },
      {
        path: '/project/miniImg',
        component: './project/miniImg',
        meta: { title: '压缩图片' },
      },
    ],
  },
];
export const themeSystemRoutes: IRoutes[] = [
  {
    path: '/theme',
    meta: { title: '文案系统' },
    component: './theme',
  },
];

export const sidebarRoutes = [
  ...introduceRoutes,
  ...reactComponentRoutes,
  ...vue2ComponentRoutes,
  ...libs,
  ...blogRoutes,
  ...themeSystemRoutes,
  // ...defaultRoutes,
  ...littleProjectRoutes,
  ...codeLangRoutes,
  ...littleBugsRoutes,
  ...leetCodeRoutes,
  ...bookMarkRoutes,
  ...standardRoutes,
  ...todoRoutes,
  ...myLifeRoutes,
];

export default [
  {
    // exact: true, //不能设置exact:true，否则会导致匹配不到defaultRoutes
    path: '/',
    component: '@/layouts/index',
    // wrappers: ['./Authorized'],
    // routes: [...reactComponentRoutes],
    routes: sidebarRoutes,
  },
];
