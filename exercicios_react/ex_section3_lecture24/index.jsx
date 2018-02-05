import React from 'react' // necessario para qualquer componente react.
import ReactDOM from 'react-dom' // necessario no arquivo index, para renderizar o DOM.
import SilvaFamily from './silvaFamily'


ReactDOM.render (
	<SilvaFamily />
	, document.getElementById('app') // renderiza o codigo html acima dentro da div id="app", que consta no index.html
)