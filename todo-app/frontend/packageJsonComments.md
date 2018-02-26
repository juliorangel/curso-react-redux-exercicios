{
  "name": "frontend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --progress --colors --inline --hot",
    "production": "webpack --progress -p"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "axios": "^0.15.3",
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-plugin-react-html-attrs": "^2.0.0",
    "babel-plugin-transform-object-rest-spread": "^6.22.0",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.22.0",
    "bootstrap": "^3.3.7",
    "css-loader": "^0.26.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "font-awesome": "^4.7.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-router": "^3.0.2",
    "style-loader": "^0.13.1",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"
  }
}

  // Chama o servidor, mostrando progresso e atualizando o browser a cada mudanca  
  //  "dev": "webpack-dev-server --progress --colors --inline --hot",

  // Gera o bundle minificado para ambiente de producao.
  //  "production": "webpack --progress -p"


// DEPENDENCIES

// o babel-core faz o transpiling do codigo react para o que sera executado no browser
// o babel-loader eh a conexao entre o babel e o webpack

// extract-text-webpack-plugin extrai os textos dos arquivos .css para passar depois pelo processo de css-loader e style-loader
// file-loader eh usado pra carregar fontes e imagens no webpack

// axios eh um cliente http baseado em promises, e iremos usa-lo para fazer as chamadas http para os servicos de backend, muito usado (certamente o padrao) de http client