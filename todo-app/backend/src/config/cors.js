
// CORS (middleware)

// Criando um Middleware
// Ele adiciona headers nas respostas que serao enviadas ao browser pra dizer que é permitido acessar o serviço que se está requerindo.
module.exports = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next() // esta linha é importantissima: caso nao fosse chamado o next, este middleware travaria a aplicaçao.
}

/*
	Req: requisição
	Res: response
	Next: o "chain". É o next que diz se vai pro proximo filtro ou se vai abortar
*/