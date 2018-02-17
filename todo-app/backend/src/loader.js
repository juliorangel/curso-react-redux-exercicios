/*
	O loader é o arquivo que carrega os principais arquivos de configuracao dos soucers.
*/

// Require para o arquivo que contem/carrega as configuracoes de servidor
// COMENTADO NA LECTURE 36
// require('./config/server')

// Quando o require for executado, ira retornar um server.
const server = require('./config/server')

// Require para o arquivo que contem/carrega as configuracoes de banco de dados
require('./config/database')

// Require para o arquivo que contem/carrega as configuracoes de rotas
require('./config/routes')(server)