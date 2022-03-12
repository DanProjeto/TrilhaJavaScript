console.log("Lista de carros");
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];
console.log(carros);

console.log("\n");

console.log("Utilizando filter para criar um array de carros da marca Fiat");
function retornaCarrosFiat(carro) {
    return (carro.marca == 'Fiat');
}

/* filter é usado para filtrar os elementos de um array e criar um
   novo com apenas os elementos que atendem à alguma condição */
const carrosFiat = carros.filter(retornaCarrosFiat);

console.log(carrosFiat);