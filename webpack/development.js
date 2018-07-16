const merge = require('webpack-merge');
const base = require('./base');

module.exports =
    merge(base, {
    	mode: 'development',
    	devServer: {
    		disableHostCheck: true,
    		publicPath: '/',
    		historyApiFallback: true,
    		headers: {
    			'Access-Control-Allow-Origin': '*',
    			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    		}
    	}
    });