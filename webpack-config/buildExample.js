const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const copyExampleFiles = require('./copyExampleFiles');

const buildExample = ({ outputPath, isHotLoaderEnv }) => ({
	devtool: 'source-map',
	mode: 'development',
	entry: {
		example: isHotLoaderEnv
			? ['babel-polyfill', 'react-hot-loader/patch', './src/example/entry', './src/example/entry.scss']
			: ['babel-polyfill', './src/example/entry', './src/example/entry.scss'],
	},
	output: {
		path: outputPath,
		filename: '[name].js',
		publicPath: 'http://localhost:9035/',
	},
	devServer: {
		hotOnly: true,
		contentBase: outputPath,
		compress: true,
		port: 9035,
		host: 'localhost',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				loader: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					plugins: 'react-hot-loader/babel',
				},
				exclude: /node_modules/,
			},
			{
				test: /\.md/,
				loader: ['babel-loader', 'axe-markdown-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ttf|woff|eot)$/,
				loader: 'url-loader',
			},
		],
	},
	externals: {},
	plugins: [
		new CleanWebpackPlugin('example', { root: outputPath + '/..' }),
		copyExampleFiles(isHotLoaderEnv),

		...(isHotLoaderEnv
			? [new OpenBrowserPlugin({ url: 'http://localhost:9035' })]
			: [
					new ImageminPlugin(),
					new OptimizeCssAssetsPlugin({
						assetNameRegExp: /\.(scss|css)$/g,
					}),
					new UglifyJSPlugin({
						uglifyOptions: {
							compress: true,
							output: {
								comments: false,
							},
						},
					}),
			  ]),
	],
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			'prop-types$': path.join(__dirname, '../node_modules/axe-prop-types'),
		},
	},
});

module.exports = buildExample;
