const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyExampleFiles = isHotLoaderEnv =>
	new CopyWebpackPlugin(
		[
			{
				from: { glob: '**/*.+(html|json|png|svg|jpg|jpeg|gif|ttf|woff|eot)' },
				context: 'src/example',
				to: isHotLoaderEnv ? './[path]/[name].[ext]' : '../example/[path]/[name].[ext]',
			},
		],
		{
			ignore: [{ glob: '**/_*/**' }, { glob: '**/_*' }],
		},
	);

module.exports = copyExampleFiles;
