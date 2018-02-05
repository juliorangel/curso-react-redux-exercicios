{
  "name": "exercicios_react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    // O comando npm run [algo] chama os scripts contidos nesse hash.
    "dev": "webpack-dev-server --progress --colors --inline --hot"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.22.1", // Babel core
    "babel-loader": "^6.2.10", // babel loader, o que faz a interface entre o Webpack e o Babel Core.
    "babel-plugin-transform-object-rest-spread": "^6.22.0", // script Babel pra interpretar o Object Rest Spread (...) 
    "babel-preset-es2015": "^6.22.0", // script que vai traduzir a sintaxe do ES2015 para linguagem JS de Browsers.
    "babel-preset-react": "^6.22.0", // preset do react para o Babel
    "react": "^15.4.2", // React core
    "react-dom": "^15.4.2", // React DOM, necessario para construir a arvore DOM no index principal da aplicacao.
    "webpack": "^1.14.0", // webpack
    "webpack-dev-server": "^1.16.2" // servidor webpack
  }
}
