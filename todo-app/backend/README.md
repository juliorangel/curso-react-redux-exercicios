# Exercicios TODO-APP BACKEND #
Curso de react/redux na Udemy.
Cada exercício está alocado em pastas nomeadas "ex".
Para trocar a visualizacao da pasta, é preciso mudar o path de referencia ENTRY no webpack.config.js.

# Referencias dos exercicios e pastas #
ex_s4: Section 4 (ToDo App BACKEND)
	- lecture 31-32: package.json, gitignore, install packages
	- lecture 33: Servidor (Express) - pasta src (loader.js e config/server.js)
	- lecture 34: MongoDB - pasta src (database.js e config/server.js)
	- lecture 35: ODM & API Rest - pasta src (/api/todo)
	- lecture 36: Routes - pasta src (config/routes.js e loader.js)
	- lecture 37: Teste da API com o Postman (chrome extension)
	- lecture 38: Cors (middleware) - pasta src (config/cors e server.js)
	- lecture 39: Usando o PM2 (npm run production)

# URL do Curso #
https://www.udemy.com/react-redux-pt/learn/v4/overview


# ANOTACOES

:: Require / Exports

- require('module') - importa um modulo que esta no node_modules e no package.json . É sempre referencia ao mesmo module.
- require('./pasta/arquivo') - importa um arquivo que esta na aplicacao (caminho relativo)
- module.exports - expoe o modulo para ser visto/usado por outros modulos (por padrao, tudo o que esta em um arquivo eh um modulo)