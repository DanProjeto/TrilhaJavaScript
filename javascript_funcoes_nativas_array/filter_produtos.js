console.log("Todos os produtos dessa seção da loja");
const produtos = [
    { id: 1, nome: 'Açucar', ativo: true, estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', ativo: false, estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Lucas descartáveis', ativo: false, estoque: 1000, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', ativo: true, estoque: 1000, valor: 13.85 },
];
console.log(produtos);

/* Caso ativo seja true, vai guardar o produto em um novo array */
function verificaProdutoAtivo(produto) {
    return produto.ativo == true;
};

const produtosAtivos = produtos.filter(verificaProdutoAtivo);

console.log("\n");
console.log("Produtos disponíveis para venda:");
console.log(produtosAtivos);