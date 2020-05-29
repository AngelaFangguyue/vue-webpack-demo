const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//new VueLoaderPlugin();
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "demo.js"
    },
    module: {
        rules: [
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//配置处理.css文件的第三方处理规则
            { test: /\.less$/, use: ["style-loader", 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ["style-loader", 'css-loader', 'sass-loader'] },

        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        },
        extensions: ['*', '.js', '.vue']
    },
    plugins: [

         new VueLoaderPlugin()
    ]
}
