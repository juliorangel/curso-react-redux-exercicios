
/*

Os componentes react podem ser criados de duas formas:
- com base em funções;
- com base em classes (que é um mecanismo de sintaxe, e que ira vira uma funcao apos ser interpretado);

*/

import React from 'react' // necessario para qualquer component React

// Componente com base em Função Arrow (=>) (demonstracao com export direto na funcao)
export default () => ( 
	// tudo o que esta dentro do parentese (expressao) sera retornado (return)
	<h5>Function component arrow</h5>
)