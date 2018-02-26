
/*
	Componente principal da aplicacao, que também reune as chamadas de dependencias CSS/Font.

	- o diretorio 'modules/' eh uma referencia ao apelido (alias) resolve > alias > modules (webpack.config.js)

*/

// Referencia do CSS
import 'modules/bootstrap/dist/css/bootstrap.min.css'
// Referencia da fonte
import 'modules/font-awesome/css/font-awesome.min.css'
// Referencia para CSS Custom
import '../template/custom.css'
// Referencia do react
import React from 'react'

// Import dos componentes
import Menu from '../template/menu'
import Routes from './routes'

// Export do componente
// A expressao (entre parenteses) retorna a chamada do metodo props
export default props => (
	<div className='container'>
		<Menu />
		<Routes />
	</div>
)