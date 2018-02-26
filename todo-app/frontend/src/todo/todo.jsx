
/*
	Componente TODO
	- baseado em classe
	- o mais complexo do sistema
	- centraliza boa parte das regras relativas ao cadastro de tarefas do sistema
*/ 

// Referencia do react e react.component
import React, { Component } from 'react'
// Referencia do axios (conexao com banco de dados)
import axios from 'axios'

// Import de components
import Header from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'



// conexao com o banco de dados
// o backend roda na porta 3003
const URL = 'http://localhost:3003/api/todos'



// Export
export default class Todo extends Component {



	/*
		Sobre o Todo:
		- Na maioria das linguagens o this eh baseado no escopo da funcao onde ele foi escrito (contexto lexico, que é o que acontece com arrow functions)
		- Em funções normais o this é baseado em quem chamou, ele muda o valor de acordo com quem chamou a funcão
		- o this usado aqui dentro de Todo deve representar Todo;
		- para isto, existe o constructor(props), para que todos os this dentro do Todo represente o Todo
	*/
	constructor(props) {
		// o constructor(props) necessita do super(props) para funcionar.
		super(props)

		// o state controla o estado do objeto input do todoForm
		// o this.state recebe um objeto que tem uma description vazia e uma lista vazia (estado inicial do objeto)
		// o estado sera alterado usando o metodo setState
		// sempre que o estado atualizar, automaticamente passa pro this.state.description
		this.state = { description:'', list: [] }

		// o this.handleAdd vai representar um bind para o this.
		// dentro do construtor o this representa o Todo, mas amarrando com bind..
		// amarrando com o bind, fazemos com que o metodo que chama handleAdd (que nao é o Todo), se refira ao o Todo quando usar this
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)		
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleClear = this.handleClear.bind(this)
		this.refresh()

	}



	/* ATUALIZA O ESTADO */
	refresh(description = '') {
		// se o description tiver setado, adiciona um parametro description__regex(filtro do node-restful) com a descriçao
		// se a descricao existir, coloca ela, senao, coloca uma string vazia
		// essa constante eh usada no axios seguinte, concatenada com o resultado da lista
		const search = description ? `&description__regex=/${description}/` : ''
		// chama conexao com API (URL)
		// usando o metodo get (pega dados) com filtro (sort) para ordenar por dada de criacao (createdAt) de forma decrescente
		// esse filtro exibe do maior para o menor (o ultimo aparece primeiro)
		// adiciona a variavel search para passar a description
		axios.get(`${URL}?sort=-createdAt${search}`)
				// atualiza o estado:  pega o estado atual, adiciona uma descricao vazia e coloca na lista o resp.data
				// a descricao vazia é para zerar o texto que a pessoa adicionou
				.then(resp => this.setState({ ...this.state, description, list: resp.data }))
				// o axio é baseado em "promise", por isso o metodo .then
	}


	/* BUSCA NA LISTA */
	handleSearch() {
		// para fazer uma pesquisa em cima de algo digitado, basta chamar o refresh passando o estado atual (description)
		this.refresh(this.state.description)
	}	

	/* LIMPA O CAMPO */
	handleClear() {
		// O refresh já faz os dois trabalhos: limpa o campo e traz a tabela atualizada
		this.refresh()
	}

	/* PEGA O ESTADO DO INPUT */
	// recebe um evento sempre que o usuario digitar no input
	handleChange(e) {
		/*
			muda o estado atual da descrição
			o seState possui um objeto que tem como parametros:
				- uma funcao spread que pega todos os dados do estado (descricao e lista)
				- pega a descricao e associa ao valor(value) do target(input)
		*/
		this.setState( { ...this.state, description:e.target.value } )
	}

	/* ADICIONA UM DADO AO BANCO */
	handleAdd() {
		// pega o valor atual do description
		const description = this.state.description
		// chamada de conexao com API (URL)
		// usando metodo post (inclui dados) em conexao com o banco (URL)
		axios.post(URL, { description })
			// sempre que insere um novo item na lista, ele chama o metodo refresh para atualizar.
			.then(resp => this.refresh())
			// o axio é baseado em "promise", por isso o metodo .then
	}

	/* REMOVE UM DADO DO BANCO */
	handleRemove(todo) {
		// para exclusao ou alteracao, precisamos chamar o id na URL
		axios.delete(`${URL}/${todo._id}`)
					// sempre que remove um item na lista, ele chama o metodo refresh para atualizar.
					.then(resp => this.refresh(this.state.description))
	}

	/* MARCA COMO DONE */
	handleMarkAsDone(todo) {
		// para marcar um item como done, precisamos chamar o metodo Put (elemento, atualizacao)
		axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
					// depois de marcado, chama o metodo refresh para atualizar.
					.then(resp => this.refresh(this.state.description))
	}

	/* MARCA COMO PENDENTE */
	handleMarkAsPending(todo) {
		// para marcar um item como pending, precisamos chamar o metodo Put (elemento, atualizacao)
		axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
					// depois de marcado, chama o metodo refresh para atualizar.
					.then(resp => this.refresh(this.state.description))
	}

	// Renderizacao do componente
	render() {
		return (
			<div>
				<Header name="ToDo" small="main page" />
				<TodoForm description={this.state.description}
									handleAdd={this.handleAdd}
									handleChange={this.handleChange}
									handleSearch={this.handleSearch}
									handleClear={this.handleClear} />
				<TodoList list={this.state.list}
									handleMarkAsDone={this.handleMarkAsDone}
									handleMarkAsPending={this.handleMarkAsPending}
									handleRemove={this.handleRemove} />
			</div>
		)
	}
}