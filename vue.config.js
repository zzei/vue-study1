const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  lintOnSave: false,
  transpileDependencies: true
})
