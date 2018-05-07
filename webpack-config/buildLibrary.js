const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const buildLibrary = ({ outputPath, isMinified, analyzeBuild }) => ({
	...(isMinified ? {} : { devtool: 'source-map' }),
	mode: isMinified ? 'production' : 'development',
	entry: {
		'roman-numeral-component': `./src/components/RomanNumeral`,
	},
	output: {
		path: outputPath,
		filename: `[name]${isMinified ? '.min' : ''}.js`,
		library: 'RomanNumeral',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	externals: {
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react',
			root: 'React',
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom',
			root: 'ReactDOM',
		},
		'prop-types': {
			commonjs: 'prop-types',
			commonjs2: 'prop-types',
			amd: 'prop-types',
			root: 'PropTypes',
		},
		redux: {
			commonjs: 'redux',
			commonjs2: 'redux',
			amd: 'redux',
			root: 'Redux',
		},
		'react-redux': {
			commonjs: 'react-redux',
			commonjs2: 'react-redux',
			amd: 'react-redux',
			root: 'ReactRedux',
		},
		'redux-thunk': {
			commonjs: 'redux-thunk',
			commonjs2: 'redux-thunk',
			amd: 'redux-thunk',
			root: 'ReduxThunk',
		},
		'styled-components': {
			commonjs: 'styled-components',
			commonjs2: 'styled-components',
			amd: 'styled-components',
			root: 'styled',
		},
		stylis: {
			commonjs: 'stylis',
			commonjs2: 'stylis',
			amd: 'stylis',
			root: 'stylis',
		},
	},
	plugins: [
		...(isMinified
			? [
					new CleanWebpackPlugin('dist', { root: outputPath + '/..' }),
					new ImageminPlugin(),
					new UglifyJSPlugin({
						uglifyOptions: {
							compress: true,
							output: {
								comments: false,
							},
						},
					}),
					...(analyzeBuild
						? [
								new BundleAnalyzerPlugin({
									analyzerMode: 'server',
								}),
						  ]
						: []),
			  ]
			: []),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ttf|woff|eot)$/,
				loader: 'url-loader',
			},
		],
	},
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			'prop-types$': path.join(__dirname, '../node_modules/axe-prop-types'),
		},
	},
});

module.exports = buildLibrary;
