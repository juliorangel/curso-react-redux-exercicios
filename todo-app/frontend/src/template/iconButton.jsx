/*

	iconButton component:

*/


import React from 'react'
import If from './if'

// Componente iconButton sem usar o componente If

// export default props => {
// 	// Condicional do botao:
// 	// Caso a propriedade hide='true', o botao nao é renderizado
// 	if(props.hide) {
// 		return null
// 	} else {
// 		// se nao tiver hide, o botao é renderizado
// 		return (
// 			// concatena o estilo do botao e recebe propiedade do clique em onClick=''
// 			// concatena o icone fa- com o valor recebido na propriedade icon=''
// 			<button className={'btn btn-'+ props.style} onClick={props.onClick}>
// 				<i className={'fa fa-'+ props.icon}></i>
// 			</button>
// 		)
// 	}

// }


// Componente iconButton usando o compoente If

export default props => (
	// Testa de props é hide... se props nao for hide, exibe o conteudo.
	<If test={!props.hide}>
			<button className={'btn btn-'+ props.style} onClick={props.onClick}>
				<i className={'fa fa-'+ props.icon}></i>
			</button>
	</If>
)