{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "src/loader.js",
  "scripts": {
    "dev": "nodemon", // para desenvolvimento usaremos o nodemon
    "production": "pm2 start src/loader.js --name todo-app"  // para producao, usaremos o pm2, mais robusto. Dizemos qual o arquivo e qual a aplicacao que vai aparecer no painel de controle do pm2.
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "body-parser": "^1.15.2", // serve para fazer o parser do body (de requisicoes que chegam no body, json, etc)
    "express": "^4.14.0", // framework web usado aqui para desenvolver os web services
    "mongoose": "^4.7.0", // faz a conexao com o banco de dados mongo e tambem o mapeamento objeto/documento, validacoes, etc.
    "node-restful": "^0.2.5", // facilita a criacao dos web services (eh uma ferramenta mais simples)
    "nodemon": "^1.11.0", // o nodemon eh parecido com o pm2 mas eh menos robusto, usamos para desenvolvimento.
    "pm2": "^2.1.5" // eh um launcher (dispara a aplicacao, monitora, controla uso de memoria e processador, e nao deixa a aplicacao parar ou cair, reestartando automaticamente). Nao se starta aplicacao node com comando "node", pois se tiver um problema a aplicacao pode cair. O pm2 (que pode ser usado em producao tambem)
  }
}