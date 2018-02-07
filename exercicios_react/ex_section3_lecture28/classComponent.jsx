
// Além de importar o pacote react, importamos também o Component, que está dentro do pacote react (React.Component)
import React, { Component } from 'react'

// O componente criado estende o componente importado para a variavel Component;
export default class ClassComponent extends Component {
	// A única função obrigatória de um component React, que retorna o template do componente.
	render() {
		return (
			// o Props aqui deve ser acessado a partir do This
			// O Props aqui é um metodo herdado pela extensao do Component react, diferentemente do props usado nos componentes de funcao, que usamos o nome props apenas por padrao, mas poderia ser qualquer outro nome.
			<h4>{this.props.value}</h4>
		)
	}
}