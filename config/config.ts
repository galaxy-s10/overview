import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';
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
  // layout: {},
  routes,
  proxy: proxy.dev,
  fastRefresh: {},
});
