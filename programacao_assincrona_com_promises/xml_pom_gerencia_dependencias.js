// ======== APENAS CÓDIGO DE EXEMPLO ======== 

// Código XML do pom para gerência de dependências.

/* Ao modificar essa função para promise, deve-se anexar as 
    callbacks à ela em vez de passá-las como argumentos de função */
var promise = carregarImg('developer.png');

promise.then(function(img) {
	document.body.appendChild(img);
});

promise.catch(function(e) {
	console.log('Ocorreu um erro ao carregar a imagem');
	console.log(e);
});


function carregarImg(url, success, error) {
	var img = new Image();
	img.src = url;

	img.onload = function() {
		success(img);
	};

	img.onerror = function(e) {
		error(e);
	};
}