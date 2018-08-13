const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');




//插件列表
var pluginsConfig = [
	new UglifyJSPlugin({
		compress: {
			warnings: false
		},
		sourceMap: true
	}),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	}),
	new ExtractTextPlugin({
		filename: 'css/[name].[hash].css',
		allChunks: true
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: "vendor",
		minChunks: function (module) {
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
];

module.exports = {
	entry: {
		'index': './src/index.js'
	},
	output: {
		filename: 'bundle/[name].[hash].js',
		chunkFilename: 'bundle/[name].[hash].js',
		path: path.resolve(__dirname, 'out'),
		publicPath: '/test/'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.(png|jpg|gif)$/,
			loader: "file-loader?name=images/[name].[hash].[ext]"
		}, {
			test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
			loader: "file-loader?name=font/[name].[hash].[ext]"
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?minimize=true'
			}),
		}, {
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader?minimize=true', 'less-loader'],
			})
		}, {
			test: /\.js$/,
			// exclude: /node_modules(?![\\/]vue-echarts[\\/])/,
			loader: 'babel-loader',
			include: [resolve('src'), resolve('test'), resolve('node_modules/vue-echarts'), resolve('node_modules/resize-detector')]
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

