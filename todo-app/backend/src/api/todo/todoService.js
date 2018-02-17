/*
	Services do ToDo
*/

// Import do restful.model('Todo', todoSchema)
const Todo = require('./todo')

// Metodos habilitados na API Rest do node restful para manipular dados do banco. Get(recebe), Post(envia), Put(modifica), Delete(exclui).
Todo.methods(['get', 'post', 'put', 'delete'])

// Modificacoes no update dos dados
Todo.updateOptions({
	new: true, // quando atualizar um registro no mongo, a resposta deve refletir o cliente atualizado e nao o antigo (padrao)
	runValidators: true // valida as atualizacoes dos atributos do todoSchema (description, done, createdAt).
})

// Export deste modulo
module.exports = Todo