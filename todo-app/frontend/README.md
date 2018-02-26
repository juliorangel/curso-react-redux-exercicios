# Exercicios TODO-APP FRONTEND #
Curso de react/redux na Udemy.
Cada exercício está alocado em pastas nomeadas "ex".
Para trocar a visualizacao da pasta, é preciso mudar o path de referencia ENTRY no webpack.config.js.

# Referencias dos exercicios e pastas #
ex_s5: Section 5 (ToDo App FRONTEND)
	- lecture 40: install packages, gitignore
	- lecture 41: build (webpack.config.js) e scripts (package.json)
	- lecture 42: index.html
	- lecture 43: app.jsx
	- lecture 44: todo.jsx, about.jsx
	- lecture 45: template/menu.jsx
	- lecture 46: main/routes.jsx
	- lecture 47: template/pageHeader.jsx
	- lecture 48: todo/todoList.jsx todoForm.jsx
	- lecture 49:	estrategia de implementacao (react puro, sem redux)
	- lecture 50: estrutura do form
	- lecture 51: template/grid.jsx e iconButton.jsx
	- lecture 52: if component: if.jsx iconButton.jsx
	- lecture 53: Evento handleAdd: todoForm.jsx todo.jsx  (!AULA IMPORTANTE DE VER NOVAMENTE)
	- lecture 54: Evento onChange: todoForm.jsx todo.jsx  (!AULA IMPORTANTE DE VER NOVAMENTE)
	- lecture 55: Evento adicionar e integracao com o banco de dados (todo.jsx)
	- lecture 56: Consulta e exclusao de todos (todoList.jsx todo.jsx)
	- lecture 57: Concluido/Pendente (todoList.jsx todo.jsx)
	- lecture 58: Pesquisa de ToDos (todoForm.jsx todo.jsx)
	- lecture 59: Limpa o formulario (todo.jsx todoForm.jsx)
	- lecture 60: Adicionando atalhos (todoForm.jsx)


# URL do Curso #
https://www.udemy.com/react-redux-pt/learn/v4/overview



# ANOTACOES #

usa-se: 
export default props => ()  para exportar uma funcao simples (return ja é subentendido nessa funcao)

export default props => { return() }  para exportar uma funcao com corpo (precisa usar return() dentro


# MAPA DE ARQUIVOS: BACKEND #



# MAPA DE ARQUIVOS: FRONTEND #

public - contem o index principal da aplicacao

src - codigos fontes do sistema
	main - contem arquivos principais do sistema
		app.jsx - Componente main da aplicacao (chama dependencias CSS/FONT)
	index.jsx - Arquivo de renderizacao da aplicacao (aplica o app.jsx a uma div id='app')
	about - sobre
	todo
		todo.jsx - Centraliza boa parte das regras relativas ao cadastro de tarefas do sistema
	

