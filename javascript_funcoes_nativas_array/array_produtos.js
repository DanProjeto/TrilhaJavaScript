console.log("Produto que vai comprar:");
const produto = {
    nome: 'New Super Mario Bros.', qnt: 1, valor: 250
};
console.log(produto);

console.log("Carrinho de compras:");
const carrinho = [
    { nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    { nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
];
console.log(carrinho);
console.log("\n");
console.log("Inserindo o produto no carrinho... \n");
carrinho.push(produto);

console.log("Carrinho de compras atulizado:");
console.log(carrinho);

console.log("Removido o item Super Mario Kart 8 \n");
carrinho.splice(1, 1);
console.log(carrinho);

console.log("Removido todos os elementos do carrinho");
console.log("COMPRA FINALIZADA COM SUCESSO!");
const totalElementos = carrinho.length;
carrinho.splice(0, totalElementos);
console.log(carrinho);