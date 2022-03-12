const chuvaDeMeteros = [
    { nome: 'Alfa Centaurídeos', declinacao: -59 },
    { nome: 'Gama Normídeos', declinacao: -50 },
    { nome: 'Pi Pupídeos', declinacao: -45 },
    { nome: 'Líridas', declinacao: 34 },
    { nome: 'Eta Aquáridas', declinacao: -1 },
    { nome: 'Eta Líridas', declinacao: 44 },
    { nome: 'Bootídeos de Junho', declinacao: 48 },
    { nome: 'Alfa Capricornídeos', declinacao: -10 },
    { nome: 'Delta Aquáridas do Sul', declinacao: -16 },
    { nome: 'Piscis Austrinídeos', declinacao: -30 },
    { nome: 'Perseidas', declinacao: 58 },
];

// Vai filtrar as chuvas que ocorrem apenas no hemisfério norte
const chuvasNoNorte = chuvaDeMeteros.filter(
    // arrow function que vai verificar se a chuva acontece mesmo no hemisfério norte
    /* Se a declinação da chuva for maior ou igual a 0 então ela ocorre nesse hemisfério e
       será adicionado a um novo array chamado chuvasNoNorte */
    (chuva) => chuva.declinacao >= 0
);

// Mesmo processo é repetido com as chuvas que ocorrem no sul
const chuvasNoSul = chuvaDeMeteros.filter(
    /* Chuvas de meteoros no hemisfério sul ocorrem apenas quando a declinação está menor que 0 */
    (chuva) => chuva.declinacao < 0
);

const imprimirChuva = function (chuva) {
    console.log(chuva);
};

/* Percorre os novos arrays e imprime as chuvas de meteoros no seu hemisfério equivalente */
console.log("\nChuvas no Hemisfério Norte:");
chuvasNoNorte.forEach(imprimirChuva);

console.log("\nChuvas no Hemisfério Sul:");
chuvasNoSul.forEach(imprimirChuva);