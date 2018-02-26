/*

	Componente de ROTAS do sistema

*/

// Import do React
import React from 'react'

// Import dependencias do react-router
import { Router, Route, Redirect, hashHistory } from 'react-router'


// Import components (paginas) para poder mapear as rotas
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
	// o router engloba as rotas
	// o hashHistory usa os # para criar as rotas no navegador
	// o route representa cada rota para cada componente (pagina)
	// o redirect redireciona para /todos qualquer URL errada que for digitada no browser.
	<Router history={hashHistory}>
		<Route path='/todos' component={Todo} />
		<Route path='/about' component={About} />
		<Redirect from='*' to='/todos' />
	</Router>
)