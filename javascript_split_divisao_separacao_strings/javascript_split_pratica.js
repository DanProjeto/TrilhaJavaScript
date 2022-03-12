var stringExemplo = "João da Silva Oliveira";
var exemplo1 = stringExemplo.split(" ");
console.log(exemplo1);

var exemplo2 = stringExemplo.split("a", 2);
console.log(exemplo2);

var endereco = "Rua das Hortênsias.Número 120.Bairro Laranjeiras.CEP 44455-000";
var exemplo3 = endereco.split(".");
console.log(exemplo3);

stringExemplo = "usuario@exemplo.com.br";
var exemplo4 = stringExemplo.split("@");
console.log(exemplo4);

stringExemplo = "Os números 12 devem ser descartados 34 da string.";
var exemplo5 = stringExemplo.split(/\d+/);
console.log(exemplo5);

var conteudoCSV = "exemplo ; com ; dados ; no ; formato ; csv";
var exemplo6 = conteudoCSV.split(/\s*;\s*/);
console.log(exemplo6);
