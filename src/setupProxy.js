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
            target: 'https://api.nnnnzs.cn',  //接口服务器地址
            // target:"http://localhost:3000",
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
        app.use(proxy.createProxyMiddleware('/orj360',
        {
            //需要转发的请求
            target: 'https://wx2.sinaimg.cn',  //接口服务器地址
            changeOrigin: true,
            pathRewrite: {
                '^/orj360': '/orj360'
            },
        }))
};