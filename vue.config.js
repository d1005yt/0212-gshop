module.exports = {
  lintOnSave: 'warning', // 输出提示错误, 但项目继续运行
  devServer: {
    proxy: {
      //解决跨域
      '/api': {
        target: 'http://182.92.128.115',
        changeOrigin: true, // 支持跨域
      }
    }
  }
}