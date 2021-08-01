module.exports = {
  lintOnSave: true,

  devServer: {
    open: true,

    watchOptions: {
      poll: true,
    },

    proxy: {
      '^/api': {
        target: process.env.BACKEND_API_URL,
        changeOrigin: true,
      },
    },
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/assets/scss/vars"; 
        `,
      },
    },
  },
};
