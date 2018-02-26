
/*
	Arquivo principal de renderização do sistema no index.html
*/

// Referencias react
import React from 'react'
import ReactDOM from 'react-dom'

// Referencia ao arquivo/componente principal da aplicacao
import App from './main/app'

// Renderiza o componente App (main/app.jsx) da aplicação na div de id=app (que esta em public/index)
ReactDOM.render(<App />, document.getElementById('app'))