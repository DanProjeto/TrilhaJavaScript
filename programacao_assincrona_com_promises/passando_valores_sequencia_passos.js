Promise.resolve('Olá developer!').then(
		function passo2(resultado) {
			// Um valor de retorno explícito é devolvido nessa função, do tipo string		
			console.log('passo 2 recebido ' + resultado);
			return 'Saudações do passo 2!';
		})
	.then(
		/* Já que essa função não retorna um valor explícito, então ela está "completada" 
		    com o valor undefined */
		function passo3(resultado) {
			console.log('passo 3 recebido ' + resultado);
		})
	.then(
		// Essa função aqui retorna uma nova promise já resolvida
		function passo4(resultado) {
			console.log('passo 4 recebido ' + resultado);
			// Seu valor de retorno será usado como parâmetro para a função seguinte
			return Promise.resolve('valor fulfilled');
		})
	.then(
		function passo5(resultado) {
			// Vai imprimir a mensagem já recebida da função anterior
			console.log('passo 5 recebido ' + resultado);
		});


// TUDO ISSO É UM CHAMADO DE ENCADEAMENTO DE CHAMADAS
// Elas vão se comunicar umas com as outras apenas com as estruturas de suas próprias promises