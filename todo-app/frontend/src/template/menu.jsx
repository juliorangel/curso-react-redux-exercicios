/*
	Menu da aplicacao

	- feito com base nas classes do bootstrap, de forma simples.

*/

// Referencia do react
import React from 'react'

// Export do componente menu
/*
	- O tipo de navegaçao usando # (hash) é para vistoriar tudo o que for passando de uma URL pra outra
	- Quando se trabalha com single page, perde-se a opcao de voltar do navegador (ja que os dados sao carregados na mesma pagina via ajax)
	- O hash nao vai pro servidor; eh um artificio usado no lado do client para usar "paginas" e historico numa aplicacao single-page.
*/
export default props => (
	<nav className='navbar navbar-inverse navbar-expand-sm bg-inverse'>
		<div className="container">		

			<div className="navbar-header">
				<a href="#" className="navbar-brand">
					<i className="fa fa-calendar-check-o"></i> ToDo App
				</a>
			</div>

			<div id="navbar" className="navbar-collapse collapse">
				<ul className="nav navbar-nav">
					<li><a href="#/todos">Tarefas</a></li>
					<li><a href="#/about">Sobre</a></li>
				</ul>
			</div>
		</div>
	</nav>
)