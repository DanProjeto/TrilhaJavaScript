import entradaDados from 'readline-sync';

// Utiliza o readline-sync para pedir ao usuário que digite seu nome:
let nome = entradaDados.question('Digite seu nome: ');
console.log("Olá, " + nome);