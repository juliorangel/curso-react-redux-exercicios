
/*
	EXERCICIO 6
  - Utilize o ATOM (IDE)
	- use ctrl+r para rodar o exercicio;
*/


/*
	Conceito de Singleton:
	quando se faz uma referencia a um MODULO do Node (ex: Express), sempre ira retornar uma referencia à mesma instancia desse modulo
	quando se faz uma referencia a uma INSTANCIA, isso nao acontece, o retorno eh uma instancia diferente
*/


// Teste 1
const express1 = require('express')
const express2 = require('express')
console.log(express1 === express2)
// se trata da mesma instancia

// Teste 2
const server1 = express1()
const server2 = express1()
console.log(server1 === server2)
// sao duas instancias diferentes

// Teste 3
const router1 = express1.Router()
const router2 = express1.Router()
console.log(router1 === router2)
// sao duas instancias diferentes