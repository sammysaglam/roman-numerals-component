const path = require('path');

const buildExample = require('./webpack-config/buildExample');
const buildLibrary = require('./webpack-config/buildLibrary');

module.exports = env => {
	const analyzeBuild = env && env.analyze;
	const isHotLoaderEnv = env && env.hot;

	return [
		// build example
		buildExample({
			// eslint-disable-next-line no-undef
			outputPath: path.resolve(__dirname, isHotLoaderEnv ? '' : 'example'),
			isHotLoaderEnv,
		}),

		// build library
		...(isHotLoaderEnv
			? []
			: [
					buildLibrary({
						// eslint-disable-next-line no-undef
						outputPath: path.resolve(__dirname, 'dist'),
						isHotLoaderEnv,
						isMinified: false,
						analyzeBuild: false,
					}),
			  ]),

		// minified library
		...(isHotLoaderEnv
			? []
			: [
					buildLibrary({
						// eslint-disable-next-line no-undef
						outputPath: path.resolve(__dirname, 'dist'),
						isHotLoaderEnv,
						isMinified: true,
						analyzeBuild,
					}),
			  ]),
	];
};
