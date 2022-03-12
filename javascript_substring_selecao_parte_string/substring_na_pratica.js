var stringExemplo = "JavaScript até que é simples!";
resultado = stringExemplo.substring(4);
console.log(resultado);

var stringExemplo2 = "substring(): Aprenda a utilizar praticando!";
resultado2 = stringExemplo2.substring(13, 31);
console.log(resultado2);

resultado3 = stringExemplo2.substring(4, -5);
console.log(resultado3);

emailExemplo = "exemplo@email.com.br";
resultado4 = emailExemplo.substring(emailExemplo.indexOf("@") + 1);
console.log(resultado4);

console.log("------------------------------------------");
console.log("Exemplos mais claros do uso de substring()");
console.log("------------------------------------------");

var posicaoInformada = stringExemplo.substring(16);
console.log(posicaoInformada);

var posicaoNoMeio = stringExemplo.substring(4, 10);
console.log(posicaoNoMeio);

var valorNegativo = stringExemplo.substring(10, -3);
console.log(valorNegativo);

var valorNegativo2 = stringExemplo.substring(-8, 0);
console.log(valorNegativo2);

var valorNegativo3 = stringExemplo.substring(-9, 24);
console.log(valorNegativo3);

var htmlExemplo = "<b>Texto em destaque</b>";
var textoHTML = htmlExemplo.substring(3, htmlExemplo.length - 4);
console.log(textoHTML);

