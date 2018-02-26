
/*

	Formulario do componente ToDo

*/

import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

// export default props => (

	// Componente inicial (com boostrap)
	// <div role='form' className='todoForm'>
	// 	<div className="col-xs-12 col-sm-9 col-md-10">
	// 		<input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa"/>
	// 	</div>
	// 	<div className="col-xs-12 col-sm-3 col-md-2">
	// 		<button className="btn btn-primary">
	// 			<i className="fa fa-plus"></i>
	// 		</button>
	// 	</div>
	// </div>

	// Componente utilizando os componentes de Grid e iconButton
	// a funcao onClick no iconButton manipula o evento de add uma nova tarefa
	// o iconButton recebe props de uma função onClick
	// o value do input é passado a partir da classe Todo (ela possui o estado da aplicacao)
	// <div role='form' className='todoForm'>
	// 	<Grid cols="12 9 10">
	// 		<input type="text" 
	// 					id="description" 
	// 					className="form-control" 
	// 					placeholder="Adicione uma tarefa"
	// 					onChange={props.handleChange}
	// 					value={props.description} />
	// 	</Grid>
	// 	<Grid cols="12 3 2">
	// 		<IconButton style='primary' icon='plus' onClick={props.handleAdd} />
	// 		<IconButton style='info' icon='search' onClick={props.handleSearch} />
	// 		<IconButton style='default' icon='close' onClick={props.handleClear} />
	// 	</Grid>
	// </div>
// )



// Export final, utilizando funcao completa (com return) para adicionar atalhos do teclado
export default props => {

	// Funcao para usar teclado (atalhos)
	const keyHandler = (e) => {
		// se apertar shift+enter, faz busca; se apertar só enter, adiciona
		if(e.key === 'Enter') {
			e.shiftKey ? props.handleSearch() : props.handleAdd()
			// ser for Esc, limpa a lista.
		} else if(e.key === 'Escape') {
				props.handleClear()
		}
	}

	return (
		<div role='form' className='todoForm'>
			<Grid cols="12 9 10">
				<input type="text" 
							id="description" 
							className="form-control" 
							placeholder="Adicione uma tarefa"
							onChange={props.handleChange}
							onKeyUp={keyHandler}
							value={props.description} />
			</Grid>
			<Grid cols="12 3 2">
				<IconButton style='primary' icon='plus' onClick={props.handleAdd} />
				<IconButton style='info' icon='search' onClick={props.handleSearch} />
				<IconButton style='default' icon='close' onClick={props.handleClear} />
			</Grid>
		</div>
	)
}
