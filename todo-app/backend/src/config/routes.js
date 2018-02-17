/*
	Configuracoes de Rotas da API
*/

// Import do modulo Express
const express = require('express')

// Tecnica node para receber um parametro:
// exportar uma função que recebe um parametro
module.exports = function(server) {

		// API Routes
		// Router do express
		const router = express.Router()
		// Middleware para urls que começam a partir de /api. O router é chamado sempre que digitarmos /api.
		// Todas as APIs disponibilizadas para serem consumidas pelo frontend vao iniciar com /api.
		server.use('/api', router)


		// TODO Routes
		// TodoServices
		const todoService = require('../api/todo/todoService')
		// O metodo register usa todos os metodos declarados em Todo.methods() (get, post, put, delete)
		// Para executar os metodos, o router usara o endereço /todos
		todoService.register(router, '/todos')

}
