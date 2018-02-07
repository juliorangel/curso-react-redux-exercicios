import React, { Component } from 'react'


class Field extends Component {

	// Metodo construtor (ver lecture29)
	constructor(props) {
		super(props)
		this.state = { value: props.initialValue }
		/*
			o This varia de acordo com o contexto, dependendo de quem chamou a funcao.
			no caso do onChange no input, o this esta fora de contexto (undefined).
			para garantir que, no onChange do input, o this represente o próprio Field, é necessario fazer um bind()
			na linha abaixo, fazemos um bind(metodo que faz referencia ou liga uma coisa a outra) do Field para esta funcao, de forma que independentemente de quem chame esta funcao, o this vai sempre apontar para o Field.
		*/
		this.handleChange = this.handleChange.bind(this)
	}

	// Metodo que capta alteracao em um componente, field, etc.
	// Quando digitamos um texto num fild, ele gera um evento onChange e este metodo estara assistindo a esse evento.
	// O metodo setState() evolui o estado recebido a partir do event. Dentro do evento pode-se chamar o target (o proprio campo input) e alterar o valor.
	handleChange(event) {
		this.setState({ value: event.target.value })
	}

	render() {
		return (
			<div>
				{/* Diferentemente do exercicio anterior (lecture29), o onChange nao invoca uma funcao, apenas exibe o resultado de uma funcao que ele esta chamando. */}
				<label>{ this.state.value }</label><br/>
				<input type="text" onChange={ this.handleChange } value={ this.state.value } />
			</div>
		)
	}

}

export default Field


/*

	CONSIDERACOES
	O ciclo de um componente controlado

	- Quando digitamos algo no campo, ele chama o metodo onChange(), que dispara uma chamada para o metodo handleChange(), que por sua vez altera o estado do valor do objeto.
	- Quando o estado é alterado, automaticamente o componente chama o metodo render() e o componente é renderizado.
	- Desta forma, o valor do componente estará sempre controlado pelo estado interno do componente, e não pela view (DOM).
	- No Anglar.js, existe a Two-way Data Binding, onde o valor pode ser controlado tanto pelo objeto quanto pela view.

*/