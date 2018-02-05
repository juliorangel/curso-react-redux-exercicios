import React from 'react' // necessario para qualquer componente react.
import ReactDOM from 'react-dom' // necessario no arquivo index, para renderizar o DOM.
import Family from './family'
import Member from './member'


ReactDOM.render (
	<Family lastName="Rangel">
		<Member name="Julio" />
		<Member name="Nando" />
		<Member name="Nilton" />
	</Family>
	, document.getElementById('app') // renderiza o codigo html acima dentro da div id="app", que consta no index.html
)