const produtosCadastrdos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Lucas descartáveis', estoque: 1000, valor: 2.50 },
];

// Função que retorna um objeto contendo apenas o nome e o valor do produto
function retornaProduto(produto) {
    const produtoExibicao = {
        nome: produto.nome,
        valor: produto.valor
    }
    return produtoExibicao;
}

// A função retornaProduto é executada em cada elemento do array
const produtoExibicao = produtosCadastrdos.map(retornaProduto);

console.log(produtoExibicao);