{
  "name": "exercicios_webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    // O comando npm run [algo] chama os scripts contidos nesse hash.

    // Test: Este script de teste deve ser retirado para dar vez ao script debaixo.
    // "test": "echo \"Error: no test specified\" && exit 1"

    // Dev: Esse script chama o servidor do webpack (no terminal, digitar npm run dev) e algumas flags (--algo). O --inline --hot faz o browser atualizar sempre que houver mudança nos codigos.
    "dev": "webpack-dev-server --progress --colors --inline --hot"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.22.1", // Babel core
    "babel-loader": "^6.2.10", // babel loader, o que faz a interface entre o Webpack e o Babel Core.
    "babel-preset-es2015": "^6.22.0", // script que vai traduzir a sintaxe do ES2015 para linguagem JS de Browsers.
    "babel-plugin-transform-object-rest-spread": "^6.22.0", // script pra interpretar o Object Rest Spread (...) 
    "css-loader": "^0.26.1", // loader de CSS
    "extract-text-webpack-plugin": "^1.0.1", // plugin necessario para interpretar textos CSS
    "react": "^15.4.2", // React core
    "style-loader": "^0.13.1", // loader de CSS
    "webpack": "^1.14.0", // webpack
    "webpack-dev-server": "^1.16.2" // servidor webpack
  }
}