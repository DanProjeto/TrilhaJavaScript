// Objeto deferido simples em jQuery
var jQuery = require("jquery");

/* A API padrão das Promises encapsula as funções resolve e reject dentro da promise 
    em si */
function carregarImg(url) {
	var deferido = jQuery.Deferred();
	var img = new Image();
	img.src = url;

	img.onload = function() {
		deferido.resolve(img);
	};

	img.onerror = function(e) {
		deferido.reject(e);
	};

	return deferido;
}