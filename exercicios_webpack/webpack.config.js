
/*
	Este arquivo vai ser executado no Node.
	Tudo o que sera utilizado aqui é o sistema de módulos do Node.
	Serão variáveis de ambiente que o Node disponibiliza, e o ambiente de execução desse arquivo é o Node.
	O webpack é um modulo do Node.

	# Para gerar os arquivos de bundle (bundle.js, app.css) manualmente, digite no terminal:
		./node_modules/.bin/webpack

*/

// Referencia do Webpack
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Objeto que contém as configurações da aplicação e que vai ser exposto fora desse arquivo que representa o módulo.
module.exports = {
	entry: './ex_s1_s2/index.js',  // referencia para o arquivo que é o ponto de entrada que chama todos os arquivos da aplicação a serem buildados.
	output: { // referencia para o arquivo saída
		path: __dirname + 'public', // caminho do arquivo de output (dirname é variavel de ambiente Node que representa o diretorio atual)
		filename: './bundle.js' // arquivo de output gerado pelo bundle e alocado na pasta public.
	},
	devServer: { // Servidor webpack focado em desenvolvimento que faz transpilling, recarrega o browser, etc..
		port: 8080,  // porta
		contentBase: './public' // pasta base onde vão estar os arquivos que o servidor ira carregar (a mesma onde estao bundle.js e o index.html que referencia o bundle.js)
	},
	plugins: [
		new ExtractTextPlugin('app.css') // arquivo de output gerado pelo bundle e alocado na pasta public.
	],
	module: { // Setting de modulos diversos como loaders, rules, etc.
		loaders: [ // array de objetos que carregam arquivos 
		{ // Objeto loader 1 (JS)
			test: /.js?$/, // tipo de arquivo que o objeto loader vai carregar (neste caso todos os arquivos javascript)
			loader: 'babel-loader', // qual loader que será usado pra carregar os arquivos
			exclude: /node_modules/, // pastas que serao excluidos da leitura e carregamento
			query: { // atributo que define o que o loader deve interpretar (traduzir)
				presets: ['es2015', 'react'], // presets (necessitam instalacao via terminal. npm i --save-dev babel-preset-react@6.22.0, por exmeplo.)
				// 'es2015' indica o EcmaScript2015. Poderia ser adicionado outros arquivos que quisesse ler e interpretar, como React, etc.
				// 'react' preset do React.
				plugins: ['transform-object-rest-spread']  // plugin para Operador Spread (ver Section 1 Lecture 13)
			}
		},
		{ // Objeto loader 2 (CSS)
			test: /\.css$/, // tipo de arquivo que o objeto loader vai carregar (neste caso todos os arquivos CSS)
			loader: ExtractTextPlugin.extract("style-loader", "css-loader") // loader que sera usado para carregar o arquivo
		}]
	}
}