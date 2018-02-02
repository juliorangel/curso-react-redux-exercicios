import React from 'react' // necessario para qualquer componente react.
import ReactDOM from 'react-dom' // necessario no arquivo index, para renderizar o DOM.
// import Component from './component.jsx' // import do component.
import Component from './component' // import do component sem extensao (reconhecida pelo metodo 'resolve', no webpack.config.js)

ReactDOM.render ( // metodo render de renderização do react.
	<Component />,
	document.getElementById('app') // renderiza o codigo html acima dentro da div id="app", que consta no index.html
)