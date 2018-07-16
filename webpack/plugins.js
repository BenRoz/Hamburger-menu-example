const path = require('path');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
    template: path.resolve('./src/index.html'),
    minify: {collapseWhitespace: true}

})

const HardSourceWebpackPlugin = new _HardSourceWebpackPlugin();

module.exports = {
    HtmlWebpackPlugin,
    HardSourceWebpackPlugin
}