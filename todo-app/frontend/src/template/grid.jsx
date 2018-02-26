
/*

	Grid component:
	Estabelece um padrao simples para colunas (de acordo com a responsividade) e converte em classes bootstrap

	Exemplo:
	toCssClasses('12')
	=> "col-xs-12"
	toCssClasses('12 6')
	=> "col-xs-12 col-sm-6"
	toCssClasses('12 6 3 1')
	=> "col-xs-12 col-sm-6 col-md-3 col-lg-1"

	O padrao gera o CSS automaticamente, do tamanho menor (xs) pro maior (lg)

*/

import React, { Component } from 'react'

export default class Grid extends Component {

	// Script do component
	toCssClasses(numbers) {
		// Separa um array de numeros com split (a partir de espaço)
		const cols = numbers ? numbers.split(' ') : [ ]
		// variavel de escopo local (let)
		let classes = ''

		// Se a coluna 0 (xs) for setada, adicione no padrao col-xs-{valor informado}
		if(cols[0]) classes += `col-xs-${cols[0]}`
		// Se a coluna 1 (sm) for setada, adicione no padrao col-sm-{valor informado}
		if(cols[1]) classes += ` col-sm-${cols[1]}`
		// Se a coluna 2 (md) for setada, adicione no padrao col-md-{valor informado}
		if(cols[2]) classes += ` col-md-${cols[2]}`
		// Se a coluna 3 (lg) for setada, adicione no padrao col-lg-{valor informado}
		if(cols[3]) classes += ` col-lg-${cols[3]}`

		return classes
	}

	// Renderização do componente
	render() {
		// Pega o parametro (props) de toCssClases que espera receber (cols)
		// Se cols não for setado, automaticamente coloca o valor 12 (12 colunas, tela inteira).
		const gridClasses = this.toCssClasses(this.props.cols || 12)
		return (
			// O componente final recebe as classes, e os filhos (conteudo)
			<div className={gridClasses}>
				{this.props.children}
			</div>
		)
	}

}