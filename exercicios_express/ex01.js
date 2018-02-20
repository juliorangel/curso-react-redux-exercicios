
/*
	EXERCICIO 1
	- Utilize o ATOM (IDE)
	- use ctrl+r para rodar o exercicio;
	- use ctrl+alt+o para abrir o browser;
	- use a URL http://127.0.0.1:3000 no browser.	
*/


// Declaracao do Express com import da biblioteca
const express = require('express')
// Declaracao de Server como uma instancia do express.
const server = express()


// Mapeando uma funcionalidade para URL raiz da aplicacao, usando GET
/* Metodo GET
		- primeiro parametro: URL
		- segundo parametro: funcao (middleware)
		- diz EXATAMENTE qual URL ira ser chamada
*/

// Middleware para o metodo GET
server.get('/', function(req, res) {
	res.send('<h1>Index!</h1>')
})

// .all: Qualquer tipo de requisicao sera mapeada para a URL /test.
server.all('/test', function(req, res) {
	res.send('<h1>Teste com ALL!</h1>')
})

// mapeado GET usando uma expressao regular
// sempre que tiver a expressao "api" na URL, sera mapeado
// qualquer api/teste, ou mesmo api_lalala, vai rodar.
server.get(/api/, function(req, res) {
	res.send('<h1>API!</h1>')
})

// Alocacao de porta pra requisicao e mapeamento
// () funcao callback
// => Arrow function
server.listen(3000, () => console.log('Executando...'))