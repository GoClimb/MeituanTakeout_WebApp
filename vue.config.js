module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.study.163.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
