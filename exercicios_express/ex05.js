
/*
	EXERCICIO 5
	- Utilize o ATOM (IDE)
	- use ctrl+r para rodar o exercicio;
	- use ctrl+alt+o para abrir o browser;
	- use a URL http://127.0.0.1:3000 no browser.	
*/


// Declaracao do Express com import da biblioteca
const express = require('express')
// Declaracao de Server como uma instancia do express.
const server = express()
// Declaracao do arquivo de router
const router = require('./ex05_routes')

/*
	EXPRESS ROUTER
	- Receber um parametro e fazer algo com ele
	
	Testar URLs:
	http://127.0.0.1:3000/api/produtos
	http://127.0.0.1:3000/api/clientes/1/maria
*/

// Use as rotas mapeadas em router (arquivo) dentro da URL /api
server.use('/api', router)

// porta de execucao
server.listen(3000, () => console.log('Executando...'))