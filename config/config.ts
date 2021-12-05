import { defineConfig } from 'umi';
import ESLintPlugin from 'eslint-webpack-plugin';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
  // base: '/',
  history: { type: 'hash' },
  // outputPath: 'billd-react',
  // publicPath: '/',
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
  reduxToolkit: {
    esModule: true,
    asyncLoadReducers: true,
  },
  proxy: proxy.dev,
  fastRefresh: {},
  mfsu: {},
  chainWebpack(config, { env, webpack, createCSSRule }) {
    // config
    //   .plugin('eslint-webpack-plugin') // 注意：如果检测到有错误信息，控制台会打印出来，而且不会继续往下执行！得解决掉错误才会继续执行
    //   // .use(new ESLintPlugin()) //只会检查js，即使.eslintrc配置了检查ts,ESLintPlugin也不会检查ts（但是vscode会读取.eslintrc,vscode还是会报错的）
    //   .use(
    //     new ESLintPlugin({
    //       extensions: ['js', 'jsx', 'ts', 'tsx'],
    //       failOnError: false, // 任何错误都会导致模块构建（module build）失败，设置为 false 禁用。
    //     })
    //   ); // 检查js/x,ts/x，如果类型有误会在控制台打印出警告/错误信息
    config.module
      .rule('miniimage')
      .test(/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/)
      .use('file-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75, // 这个会对webp图片进行压缩？
        },
      });

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/)
      .use('url-loader')
      // .before('miniimage')
      .loader(require.resolve('url-loader'))
      .options({
        limit: false,
        name: 'static/222[name].[ext]',
        // require 图片的时候不用加 .default
        esModule: false,
        fallback: {
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/[name].[ext]',
            esModule: false,
          },
        },
      });
    return config;
  },
});
