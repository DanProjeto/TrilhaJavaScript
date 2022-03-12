// Exemplo de função then retornando uma nova promise
var p1, p2;

// Após chamar a função resolve() a promise não poderá mais ser modificada
p1 = Promise.resolve();
// Obs: A função then cria seu próprio objeto
p2 = p1.then(function() {

});

/* Por conta disso a referência p1 vai apontar para um espaço em memória 
   diferente da referência p2 */
console.log('p1 e p2 são objetos diferentes: ' + (p1 !== p2));