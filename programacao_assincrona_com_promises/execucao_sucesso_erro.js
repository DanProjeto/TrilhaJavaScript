// ======== APENAS CÓDIGO DE EXEMPLO ========

var Canvas = require("canvas");
global.Image = Canvas.Image;

carregarImg('developer.png',
	function onsuccess(img) {
		document.body.appendChild(img);
	},
	function onerror(e) {
		console.log('Aconteceu um erro ao carregar a imagem');
		console.log(e);
	}
);

/* Função que usa um objeto Image do HTML para carregar uma imagem qualquer 
      setando diretamente o atributo src */
function carregarImg(url, success, error) {
	var img = new Image();
	img.src = url;

	// O browser assincronamente carrega a imagem baseada no seu atributo src 
	/* E enfilera através dessas ambas funções de callback (onload e onerror)
	    após finalizar a ação */
	img.onload = function() {
		success(img);
	};
	/* Já que essa função é assíncrona, ela aceita callbacks em vez de 
	       retornar a imagem diretamente via função */
	img.onerror = function(e) {
		error(e);
	};
}