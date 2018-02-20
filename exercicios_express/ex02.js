
/*
	EXERCICIO 2
	- Utilize o ATOM (IDE)
	- use ctrl+r para rodar o exercicio;
	- use ctrl+alt+o para abrir o browser;
	- use a URL http://127.0.0.1:3000 no browser.	
*/


// Declaracao do Express com import da biblioteca
const express = require('express')
// Declaracao de Server como uma instancia do express.
const server = express()

/*
	CADEIA DE MIDDLEWARES (chain of responsability)
*/

// Usando o parametro next() - funcao middleware completa
server.get('/', function(req, res, next) {
	console.log('Inicio...')
	next() // interrompe o fluxo e passa pro proximo middleware antes de concluir o fim.
	console.log('Fim!')
})

// Middleware de resposta, executado dentro do middleware anterior com a funcao next()
server.get('/', function(req, res) {
	console.log('Resposta...')
	res.send('<h1>Olá, Express!</h1>')
})



// porta de execucao
server.listen(3000, () => console.log('Executando...'))