// ======== APENAS CÓDIGO DE EXEMPLO ========

// Executando tarefas assíncronas em paralelo
var $ = require("jquery");

var contas = ['Conferindo Conta', 'Programa de Milhas', 'Cartão Universitário'];
console.log('Atualizando informação do balanço...');
/* forEach é usado para iterar todos os valores do vetor de contas bem como efetuar 
    a chamada às respectivas URLs do serviço de cada uma */
// Resumindo, irá retornar os dados do saldo de qualquer conta específica
contas.forEach(function(account) {
	/* ajax() - Função que retorna uma promise diferente em cada conta será usada
    	 para exibir as informações do saldo, sem se preocupar com o sincronismo do 
    	    processo */
	$.ajax().then(function(balanco) {
		console.log('Balanço: ' + account + balanco);
	});
});