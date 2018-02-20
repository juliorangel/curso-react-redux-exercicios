
/*
	EXERCICIO 4
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
	METODO ROUTE
	- a partir de uma mesma URL, pode-se encadear varias chamadas (get, post, etc)
*/

// Usando o metodo route
server.route('/clients')
	.get((req, res) => res.send('Lista de Clientes'))
	.post((req, res) => res.send('Novo Cliente'))
	.put((req, res) => res.send('Altera Cliente'))
	.delete((req, res) => res.send('Remove Cliente'))


// porta de execucao
server.listen(3000, () => console.log('Executando...'))