// ======== APENAS CÓDIGO DE EXEMPLO ======== 

var async = true;
global.XMLHttpRequest = require("xhr2");
// Cria um novo objeto XHR que representa a base de tudo o que é Ajax
var xhr = new XMLHttpRequest();
/* Abre uma nova conexão  usando o método HTTP "GET", e informa o endereço 
     final para onde a requisição será enviada */
/* Obs: Como esse modelo HTTP para requisição / resposta é assíncrono, não haverá loading 
       para a página */
xhr.open('get', 'dados.json', async);
// Envia a requisição
xhr.send();

// Cria um loop de 3 segundos via objeto Date
var timestamp = Date.now() + 3000;
while (Date.now() < timestamp);

function listener() {
	console.log('Boas vindas do listener!');
}
// Após isso, quando retornar, adiciona o listener (método ouvinte)
// load - para quando ele estiver carregado
xhr.addEventListener('load', listener);
// error - e quando algum erro estourar
xhr.addEventListener('error', listener);