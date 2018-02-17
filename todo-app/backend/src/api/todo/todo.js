/*
	API REST e Mapeamento do Objeto para o Mongo (ODM)

	API
	Conjunto de rotinas e padroes de programacao para acesso a um aplicativo ou plataforma baseado na web.
	Uma API serve para integrar softwares a outros produtos associados ao seu servico.

	REST (Representational State Transfer)
	Modelo de arquitetura para web services, usado para suporte de dados em backend service.
	- Pode-se usar com XML, Atom, JSON, etc. Embora costume-se usar mais com JSON, por existirem bons interpretadores nativos para JS, Java, Objective-C, Swift, etc;
	- Pode-se usar em qualquer protocolo (HTTP, SMTP, TCP, UDP, etc) - é independente

*/

// require do node-restful
const restful = require('node-restful')

// require do restful.mongoose que cria uma API Rest em cima do mongoose
const mongoose = restful.mongoose

// Criacao do Schema do Banco de Dados ToDo
const todoSchema = new mongoose.Schema({
	description: { // descricao do schema
		type: String, 
		required: true 
	},
	done: {  // booleano que verifica se a tarefa terminou ou nao
		type: Boolean, 
		required: true, 
		default: false 
	},
	createdAt: { // data de registro 
		type: Date,
		default: Date.now
	}
})

// Export do Schema
module.exports = restful.model('Todo', todoSchema)