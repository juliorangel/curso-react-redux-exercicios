/*

	Configuracao relativa ao servidor (express)

	NODE
	O Node.js é uma plataforma de desenvolvimento de aplicaçòes Server-side baseadas em rede utilizando JavaScript e o V8 JS Engine;

	NPM
	Package manager oficial do Node.js

	EXPRESS
	Framework para Node que permite criar aplicações web de forma simples.

*/

// porta do servidor
const port = 3003

// faz o parser do corpo da requisicao quando chegar (um form, json, etc)
const bodyParser = require('body-parser')

// servidor web que roda em cima do Node (padrao de mercado)
const express = require('express')

// startando o express (relacionando-o com uma variavel de nome 'server')
const server = express()

// Cors (lecture 38)
const allowCors = require('./cors')


// MIDDLEWARES
// Instancias do express e middlewares (chain of responsability) de requisicoes

/*
	o Express eh muito fortemente baseado em middlewares;
	eh como uma cadeia de funcoes que trabalham com requisicoes.
	Sempre que chegar uma requisicao ela ira passar por todos os middlewares abaixo
*/

/* 
	Parser URL Encoded (middleware)
	O urlencoded eh usado para submissao de forms.
	o bodyParser deve fazer o parser com o modulo extended habilitado (suporta mais tipos de dados que o padrao urlencoded).
*/
server.use(bodyParser.urlencoded({ extended: true }))

/* 
	Parser JSON (middleware)
*/
server.use(bodyParser.json())

/*
	Cors (middleware) - Lecture 38
*/
server.use(allowCors)

// ------- middlewares ends -------


// verificacao da porta do servidor e mensagem de OK caso esteja rodando.
server.listen(port, function() {
	console.log(`BACKEND is running on port ${port}.`)
})

// Export do server para usar como require no loader.js
module.exports = server