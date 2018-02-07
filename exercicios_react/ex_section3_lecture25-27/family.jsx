import React from 'react'
import { childrenWithProps } from '../utilities/reactUtilities.js'

export default props => (
	// Quando o componente for importado em algum lugar, tudo o que for passado dentro dele vai ser passado para o props.children
	/* React.cloneElement() é uma funcao do react que recebe dois parametros:
						props.children 
						props
	*/
	<div>
		
		<h3>Família</h3>
		<br/>
	
		
		<h5>:: Com props.children</h5>
		{/* Esta forma, com children, passa tudo o que estiver dentro do componente */}
		{ props.children }
		<br/><br/>

		<h5>:: Com React.cloneElement(props.children, props)</h5>
		{/* Aqui, tudo o que estiver sendo passado como props, ira aparecer no componente, podendo usar propriedade no PAI do componente */}
		{/* { React.cloneElement(props.children, props) } */}
		<i>comentado</i>
		<br/><br/>


		<h5>:: Com React.cloneElement(props.children, ...props)</h5>
		{/* Da forma acima esta se passando diretamente a propriedade do pai para o filho, e o ideal eh passar um clone (via spread ... )
				O spread não eh padrão do React, e para usa-lo foi necessario instalar o babel-plugin-transform-object-rest-spread e add a referencia do plugin no webpack.config.js.
				Este metodo so funciona quando existe APENAS UM ELEMENTO.
				Ele espera receber não um array ou conjunto, mas sim uma string ou um componente - error no console: expected a string (for built-in components) or a class/function (for composite components);
		*/}
		{/* { React.cloneElement(props.children, {...props}) }  */}
		<i>comentado</i>
		<br/><br/>


		<h5>:: Com React.Children.map()</h5>
		{/* O metodo MAP faz o mapeamento dos elementos de um array e transforma em alguma outra coisa 
				Este metodo recebe dois parametros:
						os filhos passados para a tag,
						uma callback
				No caso, com esta nova funcao, os filhos não tem como padrao as propriedades que vem do pai;
				Esta funcao nova transforma um conjunto de filhos que nao tem as propriedades do pai, em um conjunto de filhos com as propriedades do pai.
		*/}
		{/* { React.Children.map(props.children, child => React.cloneElement(child, {...props})) } */}
		<i>comentado</i>
		<br/><br/>


		<h5>:: Com funcao criada no reactUtilities</h5>
		{/* O metodo abaixo foi criado como Utilities para ser usado sempre que precisar fazer um map (ver arquivo reactUtilities) */}
		{ childrenWithProps(props.children, props) } 

	</div>
)