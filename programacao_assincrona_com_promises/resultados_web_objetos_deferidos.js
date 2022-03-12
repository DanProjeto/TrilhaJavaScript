// Gerenciando os resultados web com objetos deferidos
var Worker = require("web-worker");

const {
	JSDOM
} = require("jsdom");

const {
	window
} = new JSDOM("");

const $ = require("jquery")(window);

/* Sempre que receber a mensagem o script responde com um objeto contendo o id da requisição original e um resultado 
    hard-coded (fixo no código)*/
function onmessage(event) {
	postMessage('completed', {
		id: event.data.id,
		result: 'resultado computado'
	});
}

// Exibe o conteúdo de dois arquivos:
// task.js - Para a definição das tarefas do web worker
// main.js - Para o script que carrega o worker e recebe os resultados
var worker = new Worker('task.js');
var deferidos = {};
var cont = 0;

// Adiciona o método no objeto listener que encarregará de "escutar" sempre que o evento de "completed" for executado
worker.addEventListener('completed', function onCompleted(event) {
	// Um objeto deferido é usado para expor a função resolve() no método callback onCompleted
	var d = deferidos[event.data.id];
	d.resolve(event.data.result);
});

// Essa função de background retorna uma promise completada sempre que o worker enviar uma mensagem "completed" para a mesma tarefa
function background(task) {
	var id = cont++;
	var deferred = $.Deferred();
	deferidos[id] = deferred;
	console.log('Enviando tarefa para worker: ' + task);

	// O processamento da mensagem "completed" ocorre fora da função background que cria a promise
	worker.postMessage({
		id: id,
		task: task
	});
	return deferred.promise();
}

background('Resolve para x').then(function(result) {
	console.log('A saída é... ' + result);
}).fail(function(err) {
	console.log('Não foi possível completar a tarefa');
	console.log(err);
});