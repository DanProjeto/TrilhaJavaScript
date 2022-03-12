const jogos = [
    { id: 1, nome: 'Galactic Civilizations III', anoLancamento: 2014 },
    { id: 2, nome: 'Sins of Solar Empire Rebellion', anoLancamento: 2014 },
    { id: 3, nome: 'Child of Light', anoLancamento: 2014 },
    { id: 4, nome: 'Assassins Creed Syndicate', anoLancamento: 2015 },
];

/* A redução do array em um único valor será feita através dessa
     função */
// nomes - valor que está sendo concatenado
// jogo - elemento do arrau que está sendo iterado
function retornaNomesJogos(nomes, jogo) {
    return nomes + jogo.nome + ', ';
}

// reduce reduz um array em um único valor
const nomesJogos = jogos.reduce(retornaNomesJogos, '');

console.log("Jogos disponíveis: ")
console.log(nomesJogos.slice(0, -2));