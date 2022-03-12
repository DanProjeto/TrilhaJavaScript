const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

/* Obs: No jQuery, objetos deferidos representam operações assíncronas
   São como uma promise cujas funções resolve e reject são expostas como métodos */

function carregarImg(url) {
	var deferido = $.Deferred();

	return deferido.promise();
}

// Função em que quaisquer erros lançados são capturados e usados para rejeitar a Promise
function carregarImgSemDeferido(url) {
	return new Promise(function resolver(resolve, reject) {
		var image = new Image();
		img.src = url;
		img.onload = function() {
			resolve(image);
		};
		img.onerror = reject;
	});
}