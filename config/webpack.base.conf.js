'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // 入口起点
    entry: {
        // app: './src/main.jsx',
        app: './src/Game.jsx',
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].[hash].js",
    },
    // 解析
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css']
    },
    // loader
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /(node_modules|bower_components)/, // 屏蔽不需要处理的文件（文件夹）（可选）
            loader: 'babel-loader'
        }]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        }),
        function() {
            this.hooks.done.tap('Done', function(stats) {
                if (stats.compilation.errors && stats.compilation.errors.length) {
                    console.log(stats.compilation.errors);
                    process.exit(1);
                } else {
                    console.log('webpack complier finish 0_O');
                    console.log('webpack complier finish O_0');
                    console.log('webpack complier finish 0_O');
                    console.log('webpack complier finish O_0');
                    console.log('webpack complier finish 0_O');
                }
            });
        }
    ]
};