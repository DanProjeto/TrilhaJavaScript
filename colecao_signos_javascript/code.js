import readlineSync from 'readline-sync';

let a =
	readlineSync.question("Informe o valor de a: ");
let b =
	readlineSync.question("Informe o valor de b: ");

let soma =
	Number(a) + Number(b);

console.log("\nResultado: " + soma);