console.log("now - Obtêm a data e hora atual em millisegundos\n");
var hoje = Date.now();
console.log("Hoje em milissegundos: " + hoje);
hoje = new Date('November 30, 2021 00:00:00');

console.log("Utiliza o objeto Date para obter um timestamp\n");
var nascimento = new Date('1996-03-19 00:00:00');
console.log(nascimento);

var independencia = new Date('September 7, 1822 00:00:00');

var diaUm = 1000 * 60 * 60 * 24;
var diasDesdeIndepencia = (hoje - independencia) / diaUm;

var anoUm = 1000 * 60 * 60 * 24 * 365;
var anosDesdeIndepencia = (hoje - independencia) / anoUm;

console.log("Dia da independência: " + independencia);
console.log("Dias desde a independência em milissegundos: " + diasDesdeIndepencia);
console.log("Anos desde a independência em milissegundos: " + anosDesdeIndepencia);

var data = new Date();
console.log("Dia do mês - getDay(): " + data.getDate());
console.log("Ano: " + data.getFullYear());

data.setDate(data.getDate() + 3);
console.log("3 dias adicionados a uma data qualquer: " + data.getDate());

var data1 = new Date(2019, 0, 1);
var data2 = new Date(2019, 0, 1);
console.log("Comparando datas: ");
console.log(data1.getTime() === data2.getTime());

console.log('Diferença entre duas datas:');
data2 = new Date(2019, 0, 2);
const umaHora = 1000 * 60 * 60;
console.log((data2 - data1) / umaHora);

console.log('parse() - Converte uma representação em texto de uma data / hora em milissegundos para um inteiro');
var milissegundos = Date.parse("2019/01/13");
data = new Date(milissegundos);
console.log(data);