
/*

Os componentes react podem ser criados de duas formas:
- com base em funções;
- com base em classes (que é um mecanismo de sintaxe, e que ira vira uma funcao apos ser interpretado);

Props: propriedades dos componentes

*/

import React from 'react' // necessario para qualquer component React

// Componente com base em Função Arrow (=>) (demonstracao com export direto na funcao)

// Dois componentes em um mesmo arquivo:

const Primeiro = props => (
	<h5>Primeiro componente</h5>
)

const Segundo = props => (
	<h5>Segundo componente</h5>
)

export { Primeiro, Segundo } 



// Export Default

/*

	export default = props => (
		<h5>Primeiro componente</h5>
	)

	export const Segundo = props => (
		<h5>Segundo componente</h5>
	)

	Exportando como acima, o react entende que este eh o padrao do componente exportado, de modo que no index.jsx pode-se importar os componentes assim:

	import Primeiro, { Segundo } from './component'

	O react entende que o Primeiro eh o default, ainda que no nome do componente nao tenha "Primeiro".

*/