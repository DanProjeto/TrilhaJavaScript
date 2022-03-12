// ======== APENAS CÓDIGO DE EXEMPLO ======== 
// Encadeamento de chamadas usando then e catch

// Isso aqui são funções encadeadas 
// then - Registra uma callback para usar quando a operaçao suceder
carregarImg('developer.png').then(function(img) {
	documnt.body.appendChild(img);
}).catch(function(e) { // catch - Para lidar com os erros
	console.log('Ocorreu um erro ao carregar a imagem');
	console.log(e);
});
/* Obs: Ambos retornam objetos promise, logo o registro de callback 
    fará chamada desses dois métodos juntos */