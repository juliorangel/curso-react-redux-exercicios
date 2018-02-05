
// Esse eh um arquivo de utilitarios
// Não eh .jsx porque nao representa um componente do react


// Importamos o React, pq o metodo chamado sera o react.Children.
import React from 'react'

// Funcao para fazer o Map
function childrenWithProps(children, props) {
	return React.Children.map(props.children, child => React.cloneElement(child, {...props}))
}
export { childrenWithProps }