module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/meituan': {
        target: 'https://i.waimai.meituan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/meituan': ''
        }
      }
    }
  }
}
