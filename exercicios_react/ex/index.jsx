import React from 'react' // necessario para qualquer componente react.
import ReactDOM from 'react-dom' // necessario no arquivo index, para renderizar o DOM.
import Field from './field'

ReactDOM.render (
	<Field initialValue='' />
	, document.getElementById('app') // renderiza o codigo html acima dentro da div id="app", que consta no index.html
)