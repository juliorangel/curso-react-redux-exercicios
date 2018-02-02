
/*

Os componentes react podem ser criados de duas formas:
- com base em funções;
- com base em classes (que é um mecanismo de sintaxe, e que ira vira uma funcao apos ser interpretado);

Props: propriedades dos componentes

*/

import React from 'react' // necessario para qualquer component React

// Componente com base em Função Arrow (=>) (demonstracao com export direto na funcao)
// Props: propriedades dos componentes
export default props => ( 
	<h5>{props.value}</h5>
	// o valor é passado como propriedade do componente, na tag: <Component value="parametro props"/>,
)

