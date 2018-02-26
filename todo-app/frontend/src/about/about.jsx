
/*
	Componente About
	- baseado em funcao
*/ 

import React from 'react'
import Header from '../template/pageHeader'

export default props => (
	<div>
		<Header name="About" small="Sobre o app" />
		<div className="container">
			<h3>Nossa história</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias eos quaerat maiores, minus provident accusamus nostrum dignissimos animi deleniti quod. Consequuntur laudantium vero, debitis impedit ipsam ducimus iste magni.</p>
			<h3>Missão e visão</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias eos quaerat maiores, minus provident accusamus nostrum dignissimos animi deleniti quod. Consequuntur laudantium vero, debitis impedit ipsam ducimus iste magni.</p>		
		</div>
	</div>
)