// Reduzendo array com reduce e utilizando arrow functions

var numeros = [1, 2, 3, 4, 5, 6];
var total = numeros.reduce((total, numero) => total + numero, 0);
console.log(total);