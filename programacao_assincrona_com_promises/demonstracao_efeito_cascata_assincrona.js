// ======== APENAS CÓDIGO DE EXEMPLO ======== 

// Exemplo demonstrando o efeito castata assíncrona.
// Essas funções formam uma cadeia de promises
showTexto().then(function() {
	console.log('Olá Efeito Cascata Assíncrona!');
});

function showTexto() {
	return getTexto().then(function(texto) {
		console.log(texto);
	});
}

// ajax() - Retorna uma promise representando o resultado de uma requisição assíncrona XHR
function getTexto() {
	return ajax().then(function(json) {
		var texto = JSON.parse(json);
		return texto.conteudo;
	});
}