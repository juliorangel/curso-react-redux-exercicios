
/*
	EXERCICIO 3
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
	METODO USE
	- funciona com todos os metodos HTTP (get, put, post, etc)
	- chama tudo o que estiver dentro de /api. Ex: /api/url1, /api/url2
	- o parametro URL funciona como inicio da requisicao.
	- caso o parametro URL nao seja declarado, qualquer URL ira passar com o metodo .use
*/

// Usando o metodo use
server.use('/api', function(req, res, next) {
	console.log('Inicio...')
	next() // interrompe o fluxo e passa pro proximo middleware antes de concluir o fim.
	console.log('Fim!')
})

// Middleware de resposta, executado dentro do middleware anterior com a funcao next()
server.use('/api', function(req, res) {
	console.log('Resposta...')
	res.send('<h1>API!</h1>')
})


// porta de execucao
server.listen(3000, () => console.log('Executando...'))