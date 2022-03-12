let tabelaClassificacao = [
    { equipe: 'Time Azul', pontos: 45 },
    { equipe: 'Time Verde', pontos: 47 },
    { equipe: 'Time Amarelo', pontos: 39 },
    { equipe: 'Time Vermelho', pontos: 36 },
];

/* A tabela será ordenada em ordem decrescente, ou seja, equipes
   com mais pontos aparecerão primeiro */
function ordenarMaisPontos(a, b) {
    return b.pontos - a.pontos;
}

// A ordenação das equipes é feita com o método sort()
tabelaClassificacao.sort(ordenarMaisPontos);

for (let index = 0; index < tabelaClassificacao.length; index++) {
    let posicao = index + 1;
    console.log(posicao + " | " + tabelaClassificacao[index].equipe + " - " + tabelaClassificacao[index].pontos + " pts");
}