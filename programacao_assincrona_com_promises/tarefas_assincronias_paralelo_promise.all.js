// ======== APENAS CÓDIGO DE EXEMPLO ========

// Tarefas assíncronas em paralelo com Promise.all()
var $ = require("jquery");
var contas = ['Conferindo Conta', 'Programa de Milhas', 'Cartão Universitário'];

// map() - Cria uma série de promises que representam uma requisição de saldo de conta
var requests = contas.map(function(account) {
	return $.ajax();
});

/* Mapeia as promises para todos os resultados exibindo assim os saldos da conta 
    atualizados */
// Promise.all() consolida todas as promises em uma só
Promise.all(requests).then(function(balances) {
	console.log('Todos os ' + balances.length + ' balanços estão atualizados.');
}).catch(function(error) {
	console.log('Um erro ocorreu ao recuperar a informação de balanço');
	console.log(error);
});