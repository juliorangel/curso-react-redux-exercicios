
// Dependencia do webpack
const webpack = require('webpack')

// Dependencia do ExtractTextPlugin, usado para interpretar textos CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Objeto que contém as configurações da aplicação e que vai ser exposto fora desse arquivo que representa o módulo.
module.exports = {
	entry: './src/index.jsx', // ponto de entrada (jsx pra facilitar a IDE reconhecer que tem codigo do react dentro dos arquivos)
	output: { // ponto de saida
		path: __dirname + '/public', // __dirname(variavel de ambiente do Node) + pasta publica
		filename: './app.js' // nome do arquivo de saida
	},
	devServer: { // configuracao do webserver
		port: 8080, // porta do servidor
		contentBase: './public' // pasta de rota base do servidor
	},
	resolve: { // resolucao de extensoes que nao sao reconhecidas pelo webpack
		extensions: ['', '.js', '.jsx'],
		alias: { // apelido para pasta
			modules: __dirname + '/node_modules' // apelido para a pasta
			// se quiser referenciar qq biblioteca (ex: basta colocar modules/bootstrap/dist/bootstrap.css)
		}
	},
	plugins: [ // Geracao de CSS
		new ExtractTextPlugin('app.css') // arquivo CSS gerado pelo Extract plugin apos os parses nos arquivos css
	],
	module: { // modulos
		loaders: [{ // tres loaders:
			// loader 1
			test: /.js[x]?$/, // tipo de arquivo a ser interpretado
			loader: 'babel-loader', // interpretador
			exclude: '/node_modules/', // pasta que nao sera interpretada (ignorada)
			query: {  // presets e plugins que serao aplicados em cima do loader
				presets: ['es2015', 'react'], // presets Ecma Script e React
				plugins: ['transform-object-rest-spread'] // plugin pra interpretar o Object Rest Spread (...) 
			}
		}, {
			// loader 2
			test: /\.css$/, // tipo de arquivo a ser interpretado
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader') // plugins que serao aplicados em cima desse loader
		}, {
			//loader 3
			test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, // tipos de arquivos a serem interpretados
			loader: 'file' // plugin que sera aplicado em cima dos arquivos
		}]
	}
}