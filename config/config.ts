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
  chainWebpack(config, { env, webpack, createCSSRule }) {
    config.module
      .rule('miniimage')
      .use('file-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
        },
        // optipng.enabled: false will disable optipng
        // optipng: {
        //   enabled: false,
        // },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        // gifsicle: {
        //   interlaced: false,
        // },
        // // the webp option will enable WEBP
        webp: {
          quality: 75, //这个会对webp图片进行压缩？
        },
      });

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/)
      .use('url-loader')
      .before('miniimage')
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
