// Encapsulando um thenable para interoperabilidade
function thenable(valor) {
	return {
		then: function(onfulfill, onreject) {
			onfulfill(valor);
		}
	};
}

// Independe da API Promises que estiver sendo utilizada
// Quando chamar a função resolve(), basta passar thenable() como parâmetro
var promise = Promise.resolve(thenable('voilá!'));

promise.then(function(resultado) {
	console.log(resultado);
});