module.exports = function (api) {
	api.cache(true);

	return {
		presets: [
			[
				'babel-preset-expo',
				{
					jsxRuntime: 'classic'
				}
			]
		],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@assets': './assets',
						'@components': './components'
					}
				}
			]
		]
	};
};
