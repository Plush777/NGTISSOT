module.exports = {
	'env': {
		'browser': true,
		'es2021': true, 
		'jquery': true,
		'node': true,
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
	'ignorePatterns': [
		'*.min.js',
		'*.min.css',
		'js/lib/**',
		'js/pace-master/templates/*.css',
		'js/pace-master/themes/*.css',
		'js/pace-master/*.js',
	]
};
