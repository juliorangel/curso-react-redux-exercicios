
/*

	Componente de Cabeçalho das paginas

*/

// dependencia do react
import React from 'react'

// export do componente
// page-header é classe do bootstrap
// props.name e props.small sao os atributos name='' e small='' do componente
export default props => (
	<header className='page-header'>
		<h2>{props.name} <small>{props.small}</small></h2>
	</header>
)