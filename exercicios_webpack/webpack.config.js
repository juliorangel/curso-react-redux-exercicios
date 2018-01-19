
/*
	Este arquivo vai ser executado no Node.
	Tudo o que sera utilizado aqui é o sistema de módulos do Node.
	Serão variáveis de ambiente que o Node disponibiliza, e o ambiente de execução desse arquivo é o Node.
	O webpack é um modulo do Node.
*/

// Referencia do Webpack
const webpack = require('webpack')

// Objeto que contém as configurações da aplicação e que vai ser exposto fora desse arquivo que representa o módulo.
module.exports = {
	entry: './ex/index.js',  // referencia para o arquivo que é o ponto de entrada que chama todos os arquivos da aplicação a serem buildados.
	output: { // referencia para o arquivo saída
		path: __dirname + 'public', // caminho do arquivo de output (dirname é variavel de ambiente Node que representa o diretorio atual)
		filename: './bundle.js' // arquivo de output
	}
	devServer: { // Servidor webpack focado em desenvolvimento que faz transpilling, recarrega o browser, etc..
		port: 8080,  // porta
		contentBase: './public' // pasta base onde vão estar os arquivos que o servidor ira carregar (a mesma onde estao bundle.js e o index.html que referencia o bundle.js)
	}
}