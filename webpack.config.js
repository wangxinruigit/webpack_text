
const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    entry: {
        about:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[chunkhash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

    devServer: {
        port: 9000,
        open:true
    }
}