
// Além de importar o pacote react, importamos também o Component, que está dentro do pacote react (React.Component)
import React, { Component } from 'react'

// O componente criado estende o componente importado para a variavel Component;
export default class ClassComponent extends Component {

	// Construtor de um componente baseado em classe recebe sempre props, e deve chamar obrigatoriamente o metodo "super(props)"
	constructor(props) {
		super(props)
		// assim como props, state é uma variavel de herança do Component
		// o atributo state serve para inicializar um estado. Para modificar um estado usa-se o setState()
		this.state = { value: props.initialValue }
	}

	// metodo de soma
	sum(delta) {
		// este metodo altera o valor do State.
		// Criamos um novo objeto ao inves de alterar o dado original (usando this.state={}). Isto é um principio de programacao funcional em que o dado nao é alterado, mas evoluido.
		// Usando o setState, damos um novo objeto ao estado, que permanece como um historico de alteracao do estado.
		this.setState({ value: this.state.value + delta })

		// Para mais de um valor/atributo, usa-se como abaixo: 
		// Pega-se o estado atual, replica dentro do objeto
		// this.setState({ ...this.state, value: this.state.value + delta })

		// Fazendo como a linha abaixo, o estado seria alterado no original (nao é recomendado fazer isso)
		// this.state = ({ ...this.state, value: this.state.value + delta })
	}



	// A única função obrigatória de um component React, que retorna o template do componente.
	render() {
		return (
			<div>
				{/*  // o Props aqui deve ser acessado a partir do This */}
				{/* // O Props aqui é um metodo herdado pela extensao do Component react, diferentemente do props usado nos componentes de funcao, que usamos o nome props apenas por padrao, mas poderia ser qualquer outro nome. */}				
				{/* // Essa as variaveis que estao dentro de props (como props.value), sao apenas de leitura, nao podem ser alteradas. */}
				<h4>{ this.props.label }</h4>
				<h5>{ this.state.value }</h5>
				{/* Coloca-se a funcao sum dentro de uma funcao, para que o clique retorna uma funcao que traz o valor da funcao this.sum(). */}
				<button onClick={() => this.sum(-1)}>Dec</button>
				<button onClick={() => this.sum(1)}>Inc</button>
				<br/><br/>
			</div>
		)
	}
}


/* 
	CONSIDERACOES:

	- Passa-se dois atributos no Componente: initialValue e Label
	- O script pega o initialValue e atribui ao valor do this.state (o estado)
	- Para evoluir o estado (Dec, Inc), usa-se o botoes que chamam a funcao sum(), passando delta-1 ou delta+1.
	- Desta forma, guarda-se o valor inicial do estado, e altera-se em um novo objeto, evoluindo, nao mudando o valor original.
	- Esta principio de não alterar o valor original vem da linguagem funcional (em linguagem orientada a objeto os valores originais sao alterados).
	- No universo funcional, vc nao altera o valor original, mas cria sempre uma evolucao de um estado inicial com um novo objeto.

*/