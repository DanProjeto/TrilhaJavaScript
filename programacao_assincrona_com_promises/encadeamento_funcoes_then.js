// ======== APENAS CÓDIGO DE EXEMPLO ========

// Exemplo de encadeamento de funções then
passo1().then(
	/* Esse padrão de encadeamento de funções permite que cada um desses passos 
            envie seu próprio valor de retorno para o próximo passo */
	function passo2(resultadoDoPasso1) {

	}).then(
	function passo3(resultadoDoPasso2) {

	}).then(
	function passo4(resultadoDoPasso3) {

	});