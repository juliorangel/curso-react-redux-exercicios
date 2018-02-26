/*

	if component

	- este comonente serve para fazer mais facilmente condicionais nos outros componentes
	- permite fazer if sem necessidade de fazer o if do proprio javascript

*/

import React from 'react'

export default props => {
	// se props.test for verdadeiro, retorne o objeto que está dentro da tag if
	if(props.test) {
		return props.children
		// se nao for verdadeiro, retorna falso
	} else {
		return false
	}
}