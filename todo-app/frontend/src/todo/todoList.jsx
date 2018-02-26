
/*

	Lista do componente ToDo

*/

import React from 'react'
import IconButton from '../template/iconButton'
import iconButton from '../template/iconButton';

export default props => {

	// Lista de ToDos
	const renderRows = () => {
		// Recebe a propriedade List. Se a lista estiver setada mostra. Se nao, coloca um array vazio.
		const list = props.list || []
		// mapeia os elementos e exibe um template
		return list.map(todo => (
			// key: cada elemento precisa ser exibido com identificador unico (senao dá erro no console)
			// todo.description
			// icon button para chamar a funcao handleMarkAsDon para marcar um item como concluido
			// icon button para chamar a funcao handleMarkAsPending para marcar um item como pendente
			// icon button para chamar a funcao handleRemove para remover um item
			// como nao estamos passando como parametro padrao o evento e sim o ToDo do metodo map, entao precisa ser chamado numa funcao arrow
			// todas as funcoes que recebemos, os estados que estao sendo manipulados, vem de propriedades de ToDo (e do componente principal todo.jsx)
			// se todo.done, adiciona a classe markAsDone (ver css), senao , deixa em branco.
			<tr key={todo._id}>
				<td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
				<td>
					<IconButton style='success' icon='check' hide={todo.done}
											onClick={ () => props.handleMarkAsDone(todo) } />
					<IconButton style='warning' icon='undo' hide={!todo.done}
											onClick={ () => props.handleMarkAsPending(todo) } />
					<IconButton style='danger' icon='trash-o'
											onClick={ () => props.handleRemove(todo) } />
				</td>
			</tr>
		))
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Descrição</th>
					<th className="tableActions">Ações</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
	)
}