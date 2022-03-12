const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Lucas descartáveis', qnt: 40, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 13.85 },
];

function retornaProdutos(produto) {
    return 'Nome: ' + produto.nome + ' - ' + ' Quantidade: ' + produto.qnt + ' - '
        + ' Valor: R$ ' + produto.valor;
}

const produtosCarrinhoCompras = itensCarrinho.map(retornaProdutos);
console.log("Itens do carrinho de compras:");
console.log(produtosCarrinhoCompras);

function somarValor(total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;

    return total + valorTotal;
}

const valorAPagar = itensCarrinho.reduce(somarValor, 0);

console.log("\n");
console.log("Valor total à pagar: ");
console.log(valorAPagar);