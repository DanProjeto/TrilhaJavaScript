var stringExemplo = "Aprendendo JavaScript na prática!";
var exemplo1 = stringExemplo.indexOf("Script");
console.log("O valor retornado é " + exemplo1);

var exemplo2 = stringExemplo.indexOf("end", 4);
console.log("O valor retornado é " + exemplo2);

var exemplo3 = stringExemplo.indexOf("end", -7);
console.log("O valor retornado é " + exemplo3);

var exemplo4 = stringExemplo.indexOf("javascript");
console.log("O valor retornado é " + exemplo4);

var posicao = "Aprendendo JavaScript na prática!".indexOf("end", 6);
console.log("O valor retornado é " + posicao);

var cep = "22.000-000";
var cepFormatado = false;

if(cep.indexOf(".") == 2 && cep.indexOf("-") == 6) {
    cepFormatado = true;
}

console.log("Ao final desse script o valor formatado será: " + cepFormatado);

var posicaoInicial = stringExemplo.indexOf("prática");
var posicaoFinal = posicaoInicial + "prática".length;
var htmlExemplo = "";

for(caractere in stringExemplo) {
    htmlExemplo += stringExemplo.charAt(caractere);

    if(caractere == posicaoInicial - 1) {
        htmlExemplo += "<b>";
    }

    if(caractere == posicaoFinal - 1) {
        htmlExemplo += "</b>";
    }
}


console.log("Ao final desse script o valor de htmlExemplo será: " + htmlExemplo);