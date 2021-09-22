export default {
  dev: {
    '/api/': {
      target: 'https://hsslive.cn/api/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
