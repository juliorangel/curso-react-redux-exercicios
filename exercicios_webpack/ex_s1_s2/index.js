/* 
	Exercicio: Section 2 Lecture 9
	lecture9_logger.js
	TEMA: usando padrão CommonJS
*/
// const logger = require('./lecture9_logger')
// logger.info('Usando padrao CommonJS!')



/* 
	Exercicio: Section 2 Lecture 10
	lecture10_duvidaCruel.js
	TEMA: o arquivo precisa ser referenciado no index para ser lido (unica referencia, padrao webpack)
*/
// require('./lecture10_duvidaCruel')



/* 
	Exercicio: Section 2 Lecture 11 :: exercicio 1
	lecture11_pessoa.js
	TEMA: EcmaScript 2015 sem Babel (sem transpilling). Navegadores modernos já compreendem nova versam EcmaScript, com Classe, etc.
*/
// class Pessoa {
// 	constructor(nome) {
// 		this.nome = nome
// 	}
// 	toString() {
// 		return `Pessoa: ${this.nome}`
// 	}
// }
// const pessoa = new Pessoa('Guilherme')
// console.log(pessoa.toString())


/* 
	Exercicio: Section 2 Lecture 11 :: exercicio 2
	lecture11_pessoa.js
	TEMA: Browsers não reconhecem padrao import EcmaScript 2015, por isso precisam de um transpilling (Babel) para traduzir para JS antigos.
*/
import Pessoa from './lecture11_pessoa'
const pessoa = new Pessoa('Guilherme')
console.log(pessoa.toString())