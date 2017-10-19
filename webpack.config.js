
module.exports = {
    // 入口文件
    entry : {
        bundle : './src/index.js'
    },
    // 输出文件、路径
    output : {
        path : __dirname + '/build',
        filename : '[name].js'
    },
    // 加载器配置
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader'
                    }
                ]
            },
            {
                test : /\.js$/,
                use : [
                    {
                        loader : 'babel-loader'
                    }
                ]

            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use : [
                    {
                        loader : 'url-loader'
                    }
                ]
            },
            {
                test : /\.vue$/,
                use : [
                    {
                        loader : 'vue-loader'
                    }
                ]
            }
        ]
    }

}
