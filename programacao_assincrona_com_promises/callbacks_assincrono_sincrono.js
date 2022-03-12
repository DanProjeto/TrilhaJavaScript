// ======== APENAS CÓDIGO DE EXEMPLO ======== 

// Função callback recebe uma string msg para exibir no Console o seu valor
function callback(msg) {
	console.log(msg);
}

// Após isso, usa forEach para iterar sobre todas as mensagens e exibi-las
// Obs: Por padrão essa função é executada de forma síncrona
msgs.forEach(callback);

// Função simples de callback que só imprime no Console uma mensagem correspondente
function realocarElemento() {
	console.log('realocando...');
}

/* Exemplo de função assíncrona que será usada para redesenhar algo numa tela 
     quando um objeto de pintura como o Canvas solicitar */
window.requestAnimationFrame(realocarElemento);
/* Após a chamada  direta no objeto window a função callback só será invocada 
     entre osintervalos de repintura do browser */
console.log('Última linha do script');