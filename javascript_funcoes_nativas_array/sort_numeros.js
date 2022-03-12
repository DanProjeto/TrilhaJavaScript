const numeros = [10, 1, 11, 2, 25];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

// Vai ordenar os números em ordem crescente
function ordenaNumeros(a, b) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("");
    return a - b;
}

numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");