
/*
	referencia para webpack, visto que o contexto eh Node.js e o webpack roda em cima do Node.
*/
const webpack = require('webpack')

// Exportando a configuracao para o webpack construir os arquivos estaticos em cima do que for configurado aqui dentro.
module.exports = { 
	entry: './ex/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: './bundle.js'
	},
	devServer: {
		port: 8080,
		contentBase: './public'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'] // esta configuracao reconhece essas extensoes nos imports de arquivos react
	},
	module: {
		loaders: [{
			test: /.jsx?$/, // arquivo de extensão do React (arquivos com html dentro de código javascript);
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			} 
		}]
	}
}