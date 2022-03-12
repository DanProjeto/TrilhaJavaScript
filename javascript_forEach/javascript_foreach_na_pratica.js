cores = ["Verde", "Amarelo", "Azul", "Branco"];

function imprimir(item) {
	console.log(item);
}

console.log("Array de cores:")
cores.forEach(imprimir);

console.log('\n');

numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
	console.log(item * 2);
}

console.log('Tabuada de 2: ')
numeros.forEach(tabuadaDe2);

console.log('\n');

total = 0;

function somar(item) {
	total += item;
}

console.log("Array de números: ");
console.log(numeros);

console.log('\n');

console.log('Todos os valores do array somados')
numeros.forEach(somar);
console.log(total);

console.log('\n');

function valorSomatorio(item, indice) {
	total += item;
	console.log('[índice ' + indice + ']= ' + total + ' -> ');
}

console.log('Valor do somatório de cada posição do array com seu índice percorrido');
numeros.forEach(valorSomatorio);

console.log('\n');


function somatorioAtualizado(item, indice) {
	total += item;
	numeros[indice] = total;
}

console.log('Valores declarados no array atualizado com o somatório de suas posições');
numeros.forEach(somatorioAtualizado);
console.log(numeros);

console.log('\n');

marcas = ["Fiat", "Chevrolet", "Ford", "Volswagen"];
marcasIniciadasComF = [];
novoIndice = 0;

function selecionarMarcas(item, indice) {
	if (marcas[indice].indexOf("F") == 0) {
		marcasIniciadasComF[novoIndice] = marcas[indice];
		novoIndice++;
	}
}

console.log('Array com marcas de carros:');
console.log(marcas);
console.log('\n');

marcas.forEach(selecionarMarcas);
console.log('Marcas de carros iniciadas com F:')
console.log(marcasIniciadasComF);
console.log('\n');

console.log('Array de nomes:')
nomes = ["Alberto", "Alex", "Sandro", "Roberta"];
console.log(nomes);
console.log('\n');

function converterParaMaiusculo(item, indice) {
	nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaiusculo);
console.log('Nomes convertidos para Maiusculo:')
console.log(nomes);
console.log('\n');

nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
var tamanhoNome = 0;
var nome = "";

function maiorNome(item, indice) {
	if (nomes[indice].length > tamanhoNome) {
		nome = nomes[indice];
		tamanhoNome = nomes[indice].length;
	}
}

console.log('Obtido o maior nome a partir do array de nomes:');
nomes.forEach(maiorNome);
console.log(nome);