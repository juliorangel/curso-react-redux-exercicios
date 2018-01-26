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
// o import só funciona por causa das dependencias babel-core, babel-loader e babel-preset-es2015
// import Pessoa from './lecture11_pessoa'
// const pessoa = new Pessoa('Guilherme')
// console.log(pessoa.toString())



/* 
	Exercicio: Section 2 Lecture 12
	webpack.config.js
	TEMA: Modulo do Babel ( module{ loader[{}]} )
*/



/* 
	Exercicio: Section 2 Lecture 13
	TEMA: Operador Spread (plugin Babel)
*/
// const produto = {
// 	nome: 'Caneta Bic Preta',
// 	preco: 1.90,
// 	desconto: 0.05
// }
// function clone(objeto) {
// 	return { ...objeto } // Operador Spread (...) nao eh reconhecido pelo Babel, e precisa de um script adicional.
// 	// A funcao clone recebe um objeto e retorna um objeto novo a partir dele
// 	// A funcao Spread "espalha" todos os atributos do objeto recebido por Clone e coloca no novo objeto.
// 	// Este operador so funciona com o plugin transform-object-rest-spread, instalado no webpack.config.js
// }
// const novoProduto = clone(produto)
// novoProduto.nome = 'Caneta Bic Azul'
// console.log(produto, novoProduto)



/* 
	Exercicio: Section 2 Lecture 14
	webpack.config.js
	TEMA: Preset do React
*/
// EXERCICIO 1
// import 'react'
// export default props => (
// 	null
// )
// console.log('Funcionando, sem React, só com Babel!')

// EXERCICIO 2
// import 'react'
// export default props => (
// 	<h5>React</h5>
// )
// console.log('React Funcionando!')



/* 
	Exercicio: Section 2 Lecture 15
	webpack.config.js
	TEMA: Loader CSS (várias configuracoes de instalacao do ExtractTextPlugin no webpack.config.js, criacao de arquivo style.css e instalacoes de dependencias.)
*/
import './style.css'
import 'react'
export default props => (
	<h5>React</h5>
)
console.log('React Funcionando!')