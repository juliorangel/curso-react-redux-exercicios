/*
	Configuracao relativa ao banco de dados (mongoDB)
*/

/*
	Mongoose
	Serve tanto para fazer mapeamento dos objetos JS para os objetos que vao pro MongoDB,
	quanto para fazer a conexao com o MongoDB.
	O Mongoose tem uma API que reflete a API do MongoDB (que é um banco sem esquema relacional e eh mais simples de usar)
*/
// referencia pro mongoose
const mongoose = require('mongoose')

// Esta linha diz que o mongoose vai usar a API de Promises do proprio Node (somente para tirar a mensagem de advertencia da API de promises do mongoose que esta deprecated)
mongoose.Promise = global.Promise

// Export do mongoose e local do mongoDB
module.exports = mongoose.connect('mongodb://localhost/todo')