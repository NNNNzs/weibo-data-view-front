const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy.createProxyMiddleware('/api', {    // 'qwl'  需要转发的请求
        target: 'https://egg.nnnnzs.cn',  //接口服务器地址
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        },
    }));
};