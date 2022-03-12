// ======== APENAS CÓDIGO DE EXEMPLO ========

// Exemplo de promise com estado que nunca muda depois de completada ou rejeitada
var promise = new Promise(function(resole, reject) {
	// Após o valor da promise com a constante PI da API Math
	resolve(Math.PI);
	/* As chamadas não alterarão nem chamarão a sua respectiva função por 
	    conta do controle de estado das promises*/
	reject(0);
	resolve(Math.sqrt(-1));
});

promise.then(function(numero) {
	console.log('O número é ' + numero);
});