const plugins = require('./plugins');
const loaders = require('./loaders');

module.exports = {
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx', '.json']
	},
	plugins: [plugins.HtmlWebpackPlugin,
		plugins.HardSourceWebpackPlugin],
	module: {
		rules: [loaders.BabelLoader, loaders.ImageLoader]
	}
};
