var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// var proxy = require('http-proxy-middleware');
module.exports = {
    // 入口文件
    entry: {
        bundle: './src/index.js'
    },
    // 输出文件、路径
    output: {
        path: __dirname + '/',
        filename: '[name].js'
    },
    devServer: {
        inline:true,
        host: '0.0.0.0',
        port: 8088

    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8088' })
    ],
    // 加载器配置
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }]

            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader'
                }]
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            }
        ]
    }

}
