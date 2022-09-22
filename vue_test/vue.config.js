const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    // 关闭语法检查
    lintOnSave: false,
    // 配置代理服务器（方式一）
    /* devServer: {
    proxy: 'http://localhost:3000'
  } */
    // 配置代理服务器（方式二）
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
                // ws: true, // 用于支持websocket
                // changeOrigin: true, // 用于控制请求头中的host值
            },
            '/demo': {
                target: 'http://localhost:3001',
                pathRewrite: { '^/demo': '' },
                // ws: true, // 用于支持websocket
                // changeOrigin: true, // 用于控制请求头中的host值
            },
        },
    },
});
