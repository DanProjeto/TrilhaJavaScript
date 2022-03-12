// Lidando com handlers de rejeição (rejection) no fim de uma cadeia
/* Aqui inicia-se uma cadeia de promises que através da criação de uma 
   promise em estado rejected */
Promise.reject(Error('Más notícias')).then(
	/* Duas novas promises são criadas através da adição de chamadas à função then 
	    e finalizadas com uma chamada a catch para lidar com as exceções */
	function passo2() {
		console.log('Isso nunca é executado');
	}
).then(
	/* Essas duas funções nunca executam porque só serão chamadas quando a 
	    promise associada a elas estiver "completada" */
	function passo3() {
		console.log('Isso também nunca é executado');
	}
).catch(
	function(error) {
		console.log('Algo de errado aconteceu. Inspecione o erro para mais detalhes.');
		console.log(error);
	}
);