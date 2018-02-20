
/*
  EXERCICIO 5
  
	ROUTER file
  - express.Router() tem uma api semelhante a do Express
  - pode usar get(), use(), entre outros
  - ela cria um agrupamento de routers, facilitando um agrupamento global
*/

// Declaracao do Express com import da biblioteca
const express = require('express')
// Declaracao de Router como uma instancia do express.Router()
const router = express.Router()

// Rotas gerais
// Mapeia qualquer metodo 
// Sera chamado sempre que um router for acionado
router.use((req, res, next) => {
  const init = Date.now // pega a hora atual
  next() // invoca os outros middlewares da cadeia
  console.log(`Tempo = ${Date.now() - init} ms.`) // exibe o dado final
})

// Chamada para produtos
// colocando :id o Express entende que sera um dado variavel
// no lugar de "id" ira ter outro valor
router.get('/produtos/id:', (req, res) => {
  // Pega o ID nos parametros da requisicao
  // Converte o dado e envia como json
  res.json({id: req.params.id, name: 'Caneta'})
})

// Repete o exercicio anterior para Clientes, adicionando parametro NAME
router.get('/clientes/:id/:name', (req, res) => {
  res.json({id: req.params.id, name: req.params.name})
})

module.exports = router