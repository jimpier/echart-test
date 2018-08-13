const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


//插件设置
var pluginsConfig = [
	new webpack.optimize.CommonsChunkPlugin({
		name: "vendor",
		minChunks: function(module) {
			return module.context && module.context.indexOf("node_modules") !== -1;
		}
	}),
	new webpack.optimize.CommonsChunkPlugin({
		async: 'common',
		minChunks: 2,
	}),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'src/index.html',
		chunks: ['vendor', 'index'],
	}),
	new ExtractTextPlugin({
		filename: 'css/[name].css',
		allChunks: true
	}),
	//new BundleAnalyzerPlugin()
];

module.exports = {
	entry: {
		'index':'./src/index.js'
	},
	output: {
		filename: 'bundle/[name].js',
		chunkFilename: 'bundle/[name].js',
		path: path.resolve(__dirname, 'out'),
		publicPath:'/'
	},
	devServer: {
		//host: '192.168.1.61',
		contentBase: 'out'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.(png|jpg|gif)$/,
			loader: "file-loader?name=images/[name].[ext]"
		}, {
			test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
			loader: "file-loader?name=font/[name].[ext]"
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			}),
		}, {
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'less-loader'],
			})
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.html$/,
			loader: 'html-loader'
		}]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: pluginsConfig,
};