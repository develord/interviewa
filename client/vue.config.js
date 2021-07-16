const serverHost = process.env.VUE_APP_SERVER_PATH
module.exports = {
    devServer: {
      proxy: {
        '^/api/*': {
          target: serverHost,
          changeOrigin: true
        },
      }
    }
  }