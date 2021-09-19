import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'en',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
