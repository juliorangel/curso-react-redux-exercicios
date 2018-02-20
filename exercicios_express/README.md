
# Exercicios EXPRESS #
Curso de react/redux na Udemy.
Cada exercício está alocado em pastas nomeadas "ex".
Para trocar a visualizacao da pasta, é preciso mudar o path de referencia ENTRY no webpack.config.js.

# CONFIGURACOES DO EXERCICIO
- Instale o Atom: https://atom.io/
- Abra Preferences, va até Packages e instale dois pacotes:
	. atom-runner
	. browser-plus
- use ctrl+r para rodar o exercicio;
- use ctrl+alt+o para abrir o browser;
- use a URL http://127.0.0.1:3000 no browser.

# Referencias dos exercicios e pastas #
ex_s16: Section 16 (EXPRESS)
	- lecture 194: README.md (anotacoes)
	- lecture 195: ex01.js (metodo GET)
	- lecture 196: ex02.js (Cadeia de Middlewares)
	- lecture 197: ex03.js (metodo USE)
	- lecture 198: ex04.js (metodo ROUTE)
	- lecture 199: ex05.js, ex05_routes.js (Express Router) 
	- lecture 200: ex06.js (Express Router sao Singletons?)

# URL do Curso #
https://www.udemy.com/react-redux-pt/learn/v4/overview


# ANOTACOES

:: EXPRESS

- framework web pequeno, simples de entender e muito eficiente
- roda em cima do Node.js
- roda no backend
- muito bom para implementar API REST (especialidade dele)
- principal conceito: chain of responsability (middlewares)
- ja contem encapsulado todas as questoes referente a HTTP (tipo de requisicao, headers, mapeamento de funcao em cima de get, etc)
- tambem serve para prover conteudo estatico, implementar uma aplicacao inteira com geracao de conteudo dinamico (css, html, etc)
- como funciona: request > middleware > middleware > response


CHAIN OF RESPONSABILITY (middlewares)

- conceito principal: padrão CHAIN OF RESPONSABILITY (cadeia de responsabilidades), usado no Express atraves de middlewares
- requisicoes ao backend (node) sao interceptadas pelo Express que utiliza middlewares (pequenas funcoes) para fornecer responses;


MIDDLEWARES

- middlewares sao funcoes que analisam as requisicoes e processam alguma resposta, ou passam para outro middleware da cadeia.
request > middleware > middleware > response
- middlewares funcionam basicamente:
var mid1 = funcion(req, resp, next) {
	// faz algo...
	next() ou resp.send('...') // chama a proxima cadeia
}
- para adicionar o middleware a linha de execucao do request:
server.use(mid1) 
// o server aponta aqui para uma instancia do Express
// neste caso, o middleware esta interceptando todas as requisicoes

- para interceptar requisicoes especificas
server.use('/api', mid1)
// neste caso, o middleware so ira interceptar requisicoes cuja URL base seja /api.