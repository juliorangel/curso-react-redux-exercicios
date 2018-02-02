import React from 'react' // necessario para todos os componentes
import ReactDOM from 'react-dom' // o ReactDOM eh necessario somente para pegar toda nossa aplicação e jogar dentro da pagina html

ReactDOM.render ( // metodo render de renderização do react.
	<h1>React</h1>,
	document.getElementById('app') // renderiza o codigo html acima dentro da div id="app", que consta no index.html
)