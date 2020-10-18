const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy.createProxyMiddleware('/search',
        {
            //需要转发的请求
            target: 'https://m.weibo.cn/',  //接口服务器地址
            changeOrigin: true,
            pathRewrite: {
                '^/search': '/search'
            },
        },

    )
    );
    app.use(proxy.createProxyMiddleware('/weibo',
        {
            //需要转发的请求
            target: 'http://127.0.0.1:7001',  //接口服务器地址
            changeOrigin: true,
            pathRewrite: {
                '^/weibo': '/weibo'
            },
        }));
    app.use(proxy.createProxyMiddleware('/api/container',
        {
            //需要转发的请求
            target: 'https://m.weibo.cn',  //接口服务器地址
            changeOrigin: true,
            pathRewrite: {
                '^/api/container': '/api/container'
            },
        }))
};