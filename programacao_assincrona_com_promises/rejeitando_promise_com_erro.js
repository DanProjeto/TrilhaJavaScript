// Rejeitando uma promise através de um erro
rejeitarCom('Más notícias').then(
	function passo2() {
		console.log('Isso nunca é executado');
	}
).catch(
	function(error) {
		console.log('Erro!');
		console.log(error);
	}
);

function rejeitarCom(val) {
	return new Promise(function(resolve, reject) {
		throw Error(val);
		resolve('Não usado');
	});
}